'use strict';

var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');


var paths = {
    src: 'src',
    dist: 'dist'
};


gulp.task('clean', function () {
    return gulp.src(paths.dist)
        .pipe(clean());
});

gulp.task('cssmin', function () {
    return gulp.src(path.join(paths.src, '/*.css'))
        .pipe(cleanCSS())
        .pipe(concat('angular-preload-style.min.css'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('templatecache', function () {
    gulp.src(path.join(paths.src, '/*.html'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(templateCache('templates.js', {module: 'angular.preload.style'}))
        .pipe(gulp.dest(paths.src));
});

gulp.task('uglify', ['templatecache'], function () {
    return gulp.src(path.join(paths.src, '/*.js'))
        .pipe(concat('angular-preload-style.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', function () {
    return runSequence('clean', ['uglify', 'cssmin'])
});