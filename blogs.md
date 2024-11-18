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
    <p>{{ post.excerpt | strip_html |  truncatewords: 125  }}</p>
    <a class="link" id="continue" href="{{ post.url }}" >Continue Reading</a>
    </div>
  {% endfor %}
</main>
