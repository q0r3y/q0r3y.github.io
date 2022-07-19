---
title: BLOGS
layout: default
style: blogs.css
---
<main>
  {% for post in site.posts %}
    <div class="blogs">
    <h1><a href="{{ post.url }}" class="link">{{ post.title }}</a><span>{{ post.date | date: "%Y/%m/%d" }}</span></h1>
    <p>{{ post.excerpt | strip_html | truncatewords: 125  }}</p>
    </div>
  {% endfor %}
</main>