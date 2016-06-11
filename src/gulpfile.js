'use strict';
 
var gulp = require('gulp');
var sass = require('../node_modules/gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
