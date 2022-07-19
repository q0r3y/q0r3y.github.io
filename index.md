---
title: HOME
layout: default
script: home.js
style: home.css
---
<main>
    <div id="about">
    <h1> ABOUT </h1>
    <img src="/assets/images/squares.png" alt="portrait" id="portraitMobile">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere vulputate lectus nec faucibus. 
        Integer tempus tempor eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Ut eget gravida sem. Aenean nec viverra libero. Maecenas sit amet malesuada velit. Nulla ultrices sollicitudin libero, 
        a viverra nulla. Praesent id neque euismod, iaculis ex vel, ultricies est.
    </p>
    </div>
    <div id="portrait"><img src="/assets/images/squares.png" alt="portrait"></div>
    <div id="repos">
    <h1><a href="https://www.github.com/q0r3y" target="_blank" class="link"> GITHUB | LATEST </a></h1>
    </div>
    <div id="blogSnip">
    <h1><a href="{{ site.categories.blogs.first.url }}" class="link">BLOGS | {{ site.categories.blogs.first.title | truncatewords: 5 | upcase }}</a>
    <span>{{ site.categories.blogs.first.date | date: "%Y/%m/%d"}}</span>
    </h1>
     <p> {{ site.categories.blogs.first.excerpt | strip_html | truncatewords: 125 }} </p>
    </div>
    <div id="projectSnip">
    <h1><a href="{{ site.categories.projects.first.url }}" class="link">PROJECTS | {{ site.categories.projects.first.title | truncatewords: 5 | upcase }}</a>
    <span>{{ site.categories.projects.first.date | date: "%Y/%m/%d"}}</span>
    </h1>
    <p> {{ site.categories.projects.first.excerpt | strip_html | truncatewords: 125 }} </p>
    </div>
</main>