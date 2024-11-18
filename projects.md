---
title: PROJECTS
layout: default
style: projects.css
---

<main>
  {% for post in site.categories.projects %}
    <div class="projects">
    <h1>
      <a href="{{ post.url }}" class="link">{{ post.title }}</a>
      <div class="pageDate">{{ post.date | date: "%Y/%m/%d" }}</div>
    </h1>
    {% capture projectImage %}/assets/images/projects/{{ post.projectPath }}/{{ post.previewImage }}{% endcapture %}
    <img src="{{ projectImage }}" alt="{{ post.previewImage }}" class="projectPreviewImage">
    <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p>
    </div>
  {% endfor %}
</main>
