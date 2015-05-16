/**
     _      __  __   _   ____     _____         _                       _ 
    / \    |  \/  | (_) |  _ \   | ____|  ___  | |   __ _   _ __ ___   (_)
   / _ \   | |\/| | | | | |_) |  |  _|   / __| | |  / _` | | '_ ` _ \  | |
  / ___ \  | |  | | | | |  _ <   | |___  \__ \ | | | (_| | | | | | | | | |
 /_/   \_\ |_|  |_| |_| |_| \_\  |_____| |___/ |_|  \__,_| |_| |_| |_| |_|

 iAMiR(dot_amir) - May 2015
*/

var gulp         = require('gulp'),
	sass 		 = require('gulp-sass'),
	cssmin       = require('gulp-cssmin'),
	rename       = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('static/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('default', function() {
  	gulp.watch(['static/css/sources/*.scss'], function() {
    	gulp.run('sass');
  	});
});

/*gulp.task('css', function() {
	gulp.src('static/css/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 5 versions'))
		.pipe(cssmin())
		.pipe(gulp.dest('assets/css/'));
});

gulp.task('min', function() {
	gulp.src('static/js/*.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: ".min",
		   }))
		.pipe(gulp.dest('assets/js/'));
});

gulp.task('default', ['css', 'min']);*/