---
title: Automate User Setup in Virtual Machines with Ansible Playbooks
layout: post
date: 2024/12/08
categories: blogs
postPath: 2024-12-08-ansible-user-creation
previewImage: ansible_snip.webp
containsCode: true
description: Learn how to quickly create users, configure SSH keys, and secure your VM environments, with the power of Ansible automation.
---

<figure class="hiddenfromhome">
    <img src="/assets/images/blogs/2024-12-08-ansible-user-creation/ansible_snip.webp" width="90%" alt="pictureName">
    <figcaption><i>Ansible Play Recap</i></figcaption>
</figure>
Lately, I've been utilizing Ansible to manage Virtual Machines and Linux Containers (LXC) within my Proxmox Virtual Environment. My typical workflow involves spinning up a fresh Alpine, Debian, or Ubuntu host, installing python and enabling root SSH access. Then I use an Ansible playbook to automate creating a new user, adding the user to sudoers, adding my SSH key, and disabling root SSH login. This allows me to have a standard user configuration across all my VMs, as well as only allowing pubkey SSH access to a regular user account for increased security.

I also use PVE templates for a baseline machine configuration, but I'm working on transitioning my home lab to utilize more configuration management as code. The following Ansibile playbook is what I'm using to achieve the user and SSH configuration:

<figure>
<pre><code class="language">
{% raw %}
---
- name: Create user, add ssh keys, verify ssh settings
  hosts: new
  become: yes
  vars:
    ansible_ssh_user: root
    target_user: "user1"
    ssh_key_src: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKW263sOS/aJLot/IwFA7KoRKm2pxqjdhM6th1S1I7Qs name@host"
    user_password: "$6$cNsMe3mEx0K7iYqc$mzbcjzJ2SWqdHVNohvK7bEBtD8ffC4rwviBcYfieCsQZfNxwQ3z4sfHM3pPSqHzxVqyMPS8CUq6enWoQmLwQ70"

  tasks:

# Create User

    - name: Check if /bin/bash exists
      ansible.builtin.stat:
        path: /bin/bash
      register: bash_stat

    - name: Create user
      ansible.builtin.user:
        name: "{{ target_user }}"
        shell: "{{ '/bin/bash' if bash_stat.stat.exists else '/bin/ash' }}"
        state: present
        password: "{{ user_password }}"

# Add user to Sudo

    - name: Install sudo on Alpine
      apk:
        name: sudo
        state: present
      when: ansible_os_family == "Alpine"

    - name: Install sudo on Ubuntu
      apt:
        name: sudo
        state: present
      when: ansible_os_family == "Debian"

    - name: Add user to sudoers
      lineinfile:
        path: /etc/sudoers
        line: "{{ target_user }} ALL=(ALL) ALL"
        validate: '/usr/sbin/visudo -cf %s'


# Add SSH key to user

    - name: Ensure .ssh directory exists
      file:
        path: "/home/{{ target_user }}/.ssh"
        state: directory
        owner: "{{ target_user }}"
        group: "{{ target_user }}"
        mode: '0700'

    - name: Add SSH key to authorized_keys
      authorized_key:
        user: "{{ target_user }}"
        state: present
        key: "{{ ssh_key_src }}"
        path: "/home/{{ target_user }}/.ssh/authorized_keys"

    - name: Ensure authorized_keys has correct permissions
      file:
        path: "/home/{{ target_user }}/.ssh/authorized_keys"
        owner: "{{ target_user }}"
        group: "{{ target_user }}"
        mode: '0600'

    - name: Restart SSH service
      service:
        name: sshd
        state: restarted

# Configure SSH

    - name: Ensure the SSH configuration disables root login
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PermitRootLogin'
        line: 'PermitRootLogin no'
        state: present
      notify: Restart SSH

    - name: Ensure the SSH configuration allows public key authentication
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PubkeyAuthentication'
        line: 'PubkeyAuthentication yes'
        state: present
      notify: Restart SSH

    - name: Ensure password authentication is disabled
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^PasswordAuthentication'
        line: 'PasswordAuthentication no'
        state: present
      notify: Restart SSH

    - name: Ensure the SSH configuration allows only user login
      lineinfile:
        path: /etc/ssh/sshd_config
        regexp: '^AllowUsers'
        line: "AllowUsers {{ target_user }}"
        state: present
      notify: Restart SSH

# Verify SSH settings

    - name: Check PermitRootLogin setting
      command: grep '^PermitRootLogin' /etc/ssh/sshd_config
      register: permit_root_login
      failed_when: "'yes' in permit_root_login.stdout"

    - name: Check PubkeyAuthentication setting
      command: grep '^PubkeyAuthentication' /etc/ssh/sshd_config
      register: pubkey_auth
      failed_when: "'yes' not in pubkey_auth.stdout"

    - name: Check PasswordAuthentication setting
      command: grep '^PasswordAuthentication' /etc/ssh/sshd_config
      register: password_auth
      failed_when: "'no' not in password_auth.stdout"

    - name: Check if user has a public key in authorized_keys
      command: grep "{{ ssh_key_src }}" "/home/{{ target_user }}/.ssh/authorized_keys"
      register: user_key
      failed_when: user_key.rc != 0

    - name: Output SSH configuration status
      debug:
        msg:
          - "PermitRootLogin: {{ permit_root_login.stdout }}"
          - "PubkeyAuthentication: {{ pubkey_auth.stdout }}"
          - "PasswordAuthentication: {{ password_auth.stdout }}"
          - "User SSH Key Present: {{ 'Present' if user_key.stdout else 'Not Present' }}"
          
  handlers:
    - name: Restart SSH
      service:
        name: sshd
        state: restarted
{% endraw %}
</code></pre>
<figcaption><i>Ansible Playbook</i></figcaption>
</figure>

To generate a user password hash you can use:

<pre><code class="language">mkpasswd --method=sha-512</code></pre>

which is available on most Linux systems.

# Conclusion

I'm going to continue expanding my use of Ansible in order to perform updates and upgrades for the operating system, software, and docker containers. Eventually, I would like to be able to automate the complete deployment of any system on my lab using Infrastructure as Code. If you're looking to improve your own setup or just want to get started with Ansible in your home lab, I hope this playbook serves as a useful template.

