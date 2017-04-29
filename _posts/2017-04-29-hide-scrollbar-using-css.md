---
layout: post
title:  "Hide Scrollbar Using CSS"
date:   2017-04-29 15:01:00
categories: css
demoURL: /demo/hide-scrollbar-using-css-demo
---

Usability issues aside, there are times when you might want to hide the scrollbar as part of a feature or to give the element you're styling a cleaner look. Although there is no single CSS declaration that can accomplish this on its own, there is a fairly simple method using only CSS, particularly using the `width` and `padding` properties. Check out the demo link up top for a live example!

Basic setup:

```html
<div id="container">
  <p>Text goes here...</p>
</div>
```

```css
#container {
  width: calc(100% + 25px);
  height: 100%;
  padding: 25px;
  padding-right: 50px;
}
```

As seen in the screenshot below (rendered using Chrome's dev tools, inspecting the container element), you can see that the container's width stretches specifically 25px outside of its containing element. This is necessary because the standard scrollbar width is 24px. The `padding-right` property then pushes the content that is off-screen back into the viewable area of the `#container` element by 50px, 25px for the extra width + 25px to match the rest of the padding.

![Screenshot](/images/posts/1.png)

Oh, and it's perfectly responsive, check out the demo on your phone!
