var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");

// File paths
var SCRIPTS_PATH = 'resources/js/**/*.js';
var CSS_PATH = 'resources/css/**/*.css';
var DIST_PATH = 'resources/dist';

// Minifying and autoprefexing css files
gulp.task('styles', function () {
	console.log('starting styles task');
	return gulp.src(CSS_PATH).
	pipe(autoprefixer()).
	pipe(minify()).
	pipe(gulp.dest(DIST_PATH));
});

// minifying js files
gulp.task('scripts', function () {
	console.log('starting scripts task');
	return gulp.src(SCRIPTS_PATH)
	.pipe(uglify())
	.pipe(gulp.dest(DIST_PATH));
});

// combining both tasks
gulp.task('watch', function () {
	console.log('Starting watch task');
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	gulp.watch(CSS_PATH, ['styles']);
});
