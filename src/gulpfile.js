var gulp = require('gulp');
var gutil = require ('gulp-util');
var uglify = require ('gulp-uglify');
var watch = require ('gulp-watch');

gulp.task('melhoridade-script', function(){

	return gulp
	 		    .src(['../js/**/*.js'])
	 		    .pipe(uglify())
	 		    .pipe(gulp.dest('../dist/js'));
	
	
});

// gulp.watch('src/js/**/*.js', function(event) {
// 	 	return gulp
// 	 		    .src(['src/js/**/*.js'])
// 	 		    .pipe(uglify())
// 	 		    .pipe(gulp.dest('../dist/js'))
// 	 		    .run('melhoridade-script');
// 	 });