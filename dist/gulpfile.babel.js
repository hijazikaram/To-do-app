'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var path = require('path');
var babel = require('gulp-babel');

var paths = {
  jsSource: ['./public/components/**/*.js', '!/public/bundle.js'],
  serverSource: ['./**/*.js']

};

gulp.task('js', function () {
  return gulp.src(paths.jsSource).pipe(plumber()).pipe(babel({
    presets: ["es2015", "react"]
  })).pipe(concat('bundle.js')).pipe(annotate()).pipe(gulp.dest('./public'));
});

gulp.task('server', function () {
  return gulp.src(paths.serverSource).pipe(plumber()).pipe(babel({
    presets: ["es2015"]
  })).pipe(gulp.dest('./dist'));
});

// gulp.task('styles', () => {
//   return gulp.src(paths.sassSource)
//   .pipe(sass().on('error', sass.logError))
//   .pipe(concat('style.css'))
//   .pipe(gulp.dest('./public/assets/styles'));
// });

gulp.task('watch', function () {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.serverSource, ['server']);
  // gulp.watch(paths.sassSource, ['styles']);
});

gulp.task('default', ['watch', 'js', 'server']);