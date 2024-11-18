---
title: BLOGS
layout: default
style: blogs.css
---

<main>
  {% for post in site.categories.blogs %}
    <div class="blogs">
    <h1>
      <a href="{{ post.url }}" class="link">{{ post.title }}</a>
      <div class="pageDate">{{ post.date | date: "%Y/%m/%d" }}</div>
    </h1>
    {% capture blogImage %}/assets/images/blogs/{{ post.blogPath }}/{{ post.previewImage }}{% endcapture %}
    <img src="{{ blogImage }}" alt="{{ post.previewImage }}" class="blogPreviewImage">

<!-- FIX THIS -->

<p class="snippet">ProtonVPN recently announced they are decommissioning the legacy DNS entries for country-based IP pools like "us.protonvpn.net" which are used in older OpenVPN configuration profiles. If you're using a newer profile, you're likely using a fixed IP address instead, so this may not apply to you.

This change creates an issue for my setup. I use ProtonVPN with OpenVPN on my pfSense firewall, where I have a cron job that restarts the OpenVPN service according to the schedule I set. The cron job ensures that I get a new random IP address from ProtonVPN’s DNS pool each time the service restarts. However, with the removal of the legacy DNS pools, this option is no longer available.</p>

<!-- <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p> -->

<a class="link" id="continue" href="{{ post.url }}" >Continue Reading</a>

</div>
{% endfor %}

</main>
