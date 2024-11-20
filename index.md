---
title: HOME
layout: default
script: home.js
style: home.css
---

<main>
    <div id="about">
    <h1>ABOUT</h1>
    <img src="/assets/images/BOOM_Headshot.webp" alt="portrait" id="portraitMobile">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere vulputate lectus nec faucibus. 
        Integer tempus tempor eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Ut eget gravida sem. Aenean nec viverra libero. Maecenas sit amet malesuada velit. Nulla ultrices sollicitudin libero, 
        a viverra nulla. Praesent id neque euismod, iaculis ex vel, ultricies est.
    </p>
    </div>
    <div id="portrait"><img src="/assets/images/BOOM_Headshot.webp" alt="portrait"></div>
    <div id="repos">
      <h1><a href="https://www.github.com/q0r3y" target="_blank" class="link"> GITHUB | LATEST </a></h1>
    </div>
    {% assign latestBlog = site.categories.blogs.first %}
    <div id="blogSnip">
    <div class="postInfo">
      <h1 class="postTitle">BLOGS | LATEST</h1>
      <h1 class="postDate">{{ latestBlog.date | date: "%Y/%m/%d"}}</h1>
    </div>
      <h1>
        <a href="{{ latestBlog.url }}" class="link">{{ latestBlog.title }}</a>
      </h1>
      {% capture blogImage %}/assets/images/blogs/{{ latestBlog.postPath }}/{{ latestBlog.previewImage }}{% endcapture %}
      <figure>
        <img src="{{ blogImage }}" alt="{{ latestBlog.previewImage }}" class="postPreviewImage">
      </figure>
      <p>{{ latestBlog.excerpt | strip_html | truncatewords: 125  }}</p>
        <a class="link" id="continueReading" href="{{ latestBlog.url }}" >Continue Reading</a>
    </div>
    <!-- <div id="projectSnip">
    <h1>PROJECTS | LATEST
      <div class="postDate">{{ site.categories.projects.first.date | date: "%Y/%m/%d"}}</div>
      <h1>
        <a href="{{ site.categories.projects.first.url }}" class="link">{{ site.categories.projects.first.title }}
        </a>
      </h1>
    </h1>
    <p> {{ site.categories.projects.first.excerpt | strip_html | truncatewords: 125 }} </p>
    </div> -->

</main>
