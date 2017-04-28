---
layout: post
title:  "Gulpfile Slash"
date:   2017-04-28 14:20:05
categories: javascript
---

Have you ever set up a gulpfile, typed `gulp` into your terminal, and saw the gulp processes at work, only to have nothing happen? Your SCSS seems like it's being processed, but when you check your CSS destination folder, there's nothing there. Although the reasons for this are varied, one that is rather common is forgetting to put a slash '/' at the end of your pathnames.

Let's construct a simple gulpfile, for examlpe's sake:

```javascript
var gulp = require('gulp'),
    scss = require('gulp-sass');

var config = {
  scssPath: './scss/',
  cssDestPath: './css/'
}

gulp.task('scss', function() {
  return gulp.src(config.scssPath + '*.scss')
    .pipe(scss())
    .pipe(gulp.dest(config.cssDestPath))
});

gulp.task('watch', function() {
  gulp.watch(config.scssPath + '/*.scss', ['scss']);
});

gulp.task('default', ['watch', 'scss']);
```

To put it simply, this will work:

```javascript
var config = {
  scssPath: './scss/',
  cssDestPath: './css/'
}
```

And this will not work:

```javascript
var config = {
  scssPath: './scss',
  cssDestPath: './css'
}
```

The reason for this is because `scssPath: './scss'` is calling the scss folder itself. So Gulp attempts to write your CSS file onto the scss folder. Instead, you have to include a trailing slash like so: `scssPath: './scss/'`, which indicates to GULP to write <b>inside</b> the scss folder.
