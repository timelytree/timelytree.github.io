---
layout: post
title:  "Fluid Scroll"
date:   2017-04-01 11:20:00
categories: javascript
demoUrl: /demo/fluid-scroll
github: FluidScroll
---

---

**Disclaimer**: the majority of this code was not written by me, it was written by [Bartek Drozdz](http://www.everyday3d.com/blog/index.php/2014/08/18/smooth-scrolling-with-virtualscroll/). I mostly just re-packaged it as a stand-alone library to make it easier to use.

---

There have been times when I'd stumble on a website on which the scroll feels slower, almost like wading through water. Although I won't talk about whether or not this is a good idea from a UX perspective (sometimes it's neat, sometimes it's annoying, that's all I'll say), I nonetheless set out to figure out how it's done; below is a tutorial and a javascript snippet outlining how to make this happen.

## The Mechanics

In a gist, this effect is created by disabling native browser scrolling and instead mimicking scroll by enacting css translate on an absolutely positioned element. This element contains all the content of the website, so it seems like it's being scrolled the natural way.

## Setup

Begin by including FluidScroll and creating a div that contains all your content:

```html
<script type="text/javascript" src="/js/fluidscroll.js"></script>
<div id="content">
  <section>Section 1</section>
  <section>Section 2</section>
  <section>Section 3</section>
  <section>Section 4</section>
  <section>Section 5</section>
</div>
```

Make sure the div is absolutely positioned:

```css
#content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

Initialize the scroll effect using the javascript function below. Speed values can be changed as you see fit:

- Fast: 0.5
- Normal: 0.07
- Slow: 0.01

```javascript
var container = document.getElementById('content'),
    speed = 0.07;

FluidScroll(container, speed);
```
