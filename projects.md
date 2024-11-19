---
title: PROJECTS
layout: default
---

<main>
  {% for post in site.categories.projects %}
    <div class="posts">
    <h1>
      <a href="{{ post.url }}" class="link">{{ post.title }}</a>
      <div class="postDate">{{ post.date | date: "%Y/%m/%d" }}</div>
    </h1>
    {% capture projectImage %}/assets/images/projects/{{ post.projectPath }}/{{ post.previewImage }}{% endcapture%}
    <figure>
      <img src="{{ projectImage }}" alt="{{ post.previewImage }}" class="postPreviewImage">
    </figure>
    <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p>
    <a class="link" id="continueReading" href="{{ post.url }}" >Continue Reading</a>
    </div>
  {% endfor %}
</main>
