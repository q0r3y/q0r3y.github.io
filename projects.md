---
title: PROJECTS
layout: default
style: projects.css
---
<main>
  {% for post in site.categories.projects %}
  <div class="projects">
  <h1><a href="{{ post.url }}" class="link">{{ post.title }}</a><span>{{ post.date | date: "%Y/%m/%d" }}</span></h1>
  {% capture projectImage %}/assets/images/projects/{{ post.title }}/{{ post.image }}{% endcapture %}
  <img src="{{ projectImage }}" alt="pictureName" class="projectImage">
  <div class="card">
  {% for image in site.static_files %}
  {% capture projectTitle %}{{ post.title }}{% endcapture %}
    {% if image.path contains projectTitle %}
      <img src="{{ image.path }}" alt="pictureName">
    {% endif %}
  {% endfor %}
  </div>
  <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p>
  </div>
  {% endfor %}
</main>