var gulp = require ('gulp');
var concat = require ('gulp-concat');
var annotate = require ('gulp-ng-annotate');
var plumber = require ('gulp-plumber');
var uglify = require ('gulp-uglify');
var watch = require ('gulp-watch');
var sass = require ('gulp-sass');
var path = require ('path');
var babel = require ('babelify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var browserify = require("browserify");

var paths = {
  jsSource: ['./public/**/*.js*','./public/index.jsx', '!./public/bundle.js', '!./public/bundle.js.map'],
  serverSource: ['./**/*.js']
};

gulp.task('js', () =>  {

  return browserify("./public/index.jsx")
    .transform(babel, {presets: ["es2015", "react"]})
    .bundle()
    .on("end", function(){console.log("done");})
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public'));
});

// gulp.task('server', () => {
//   return gulp.src(paths.serverSource)
//   .pipe(plumber())
//   .pipe(babel({
//     presets: ["es2015"]
//   }))
//   .pipe(gulp.dest('./dist'));
// });

// gulp.task('styles', () => {
//   return gulp.src(paths.sassSource)
//   .pipe(sass().on('error', sass.logError))
//   .pipe(concat('style.css'))
//   .pipe(gulp.dest('./public/assets/styles'));
// });

gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['js']);
  //gulp.watch(paths.serverSource, ['server']);
  // gulp.watch(paths.sassSource, ['styles']);
});

gulp.task('default', ['watch', 'js']);
