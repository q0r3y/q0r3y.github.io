---
title: PROJECTS
layout: default
---

<main>
  {% for post in site.categories.projects %}
    <div class="posts">
    <h1>
      <a href="{{ post.url }}" class="link">{{ post.title }}</a>
      <div class="pageDate">{{ post.date | date: "%Y/%m/%d" }}</div>
    </h1>
    {% capture projectImage %}/assets/images/projects/{{ post.projectPath }}/{{ post.previewImage }}{% endcapture %}
    <img src="{{ projectImage }}" alt="{{ post.previewImage }}" class="postPreviewImage">
    <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p>
    <a class="link" id="continue" href="{{ post.url }}" >Continue Reading</a>
    </div>
  {% endfor %}
</main>
