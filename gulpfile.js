'use strict';

var path = require('path');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');


var paths = {
    src: 'src',
    dist: 'dist'
};


gulp.task('clean', function () {
    return gulp.src(paths.dist)
        .pipe(clean());
});

gulp.task('uglify', ['clean'], function () {
    return gulp.src(path.join(paths.src, '/*.js'))
        .pipe(concat('angular-preload-style.min.js'))
        /*.pipe(uglify())*/
        .pipe(gulp.dest(paths.dist));
});