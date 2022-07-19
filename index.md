---
title: HOME
layout: default
css: home.css
script: home.js
---
<main>
    <div id="about">
    <h1> ABOUT </h1>
    <img src="/assets/images/squares.png" alt="portrait" id="portraitMobile">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere vulputate lectus nec faucibus. 
        Integer tempus tempor eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Ut eget gravida sem. Aenean nec viverra libero. Maecenas sit amet malesuada velit. Nulla ultrices sollicitudin libero, 
        a viverra nulla. Praesent id neque euismod, iaculis ex vel, ultricies est.</p>
    </div>
    <div id="portrait"><img src="/assets/images/squares.png" alt="portrait"></div>
    <div id="repos">
    <h1><a href="https://www.github.com/q0r3y" target="_blank" class="link"> GITHUB | LATEST </a></h1>
    </div>
    <div id="blogSnip">
    <h1><a href="{{site.posts.first.url}}" class="link">BLOGS | {{ site.posts.first.title | truncatewords: 5 }}</a>
    <span>{{ site.posts.first.date | date: "%Y/%m/%d"}}</span>
    </h1>
     <p> {{ site.posts.first.excerpt | strip_html | truncatewords: 125 }} </p>
    </div>
    <div id="projectSnip">
    <h1><a href="projects.html" class="link">PROJECTS | PROJECT 4 </a><span>2022/07/14</span></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere vulputate lectus nec faucibus. Integer tempus tempor eros. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Ut eget gravida sem. Aenean nec viverra libero. Maecenas sit amet malesuada velit. Nulla ultrices sollicitudin libero, 
        a viverra nulla. Praesent id neque euismod, iaculis ex vel, ultricies est. Morbi sollicitudin vitae ipsum in sollicitudin. 
        Ut dui diam, semper eu vestibulum vel, lacinia mollis magna. Nullam nisi quam, semper ut porttitor sagittis, porttitor ac ex. 
        Pellentesque ut fringilla justo. Sed sagittis, quam ut consectetur facilisis, mauris lacus venenatis orci, 
        nec pellentesque nulla nibh in turpis. Maecenas rhoncus tincidunt viverra. In lacinia consequat libero eget euismod.</p>
    </div>
</main>