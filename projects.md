---
title: PROJECTS
layout: default
style: projects.css
---
<main>
  {% for post in site.categories.projects %}
  <div class="projects">
  <h1><a href="{{ post.url }}" class="link">{{ post.title }}</a><span>{{ post.date | date: "%Y/%m/%d" }}</span></h1>
  <div class="card">
  {% for image in site.static_files %}
  {% capture projectTitle %}{{ post.title }}{% endcapture %}
    {% if image.path contains projectTitle %}
      <img src="{{ image.path }}" width="600" alt="pictureName">
    {% endif %}
  {% endfor %}
  </div>
  <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p>
  </div>
  {% endfor %}
</main>