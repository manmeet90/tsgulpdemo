var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean');
	
var browserify 	= require('browserify');
var tsify 		= require('tsify');
var source 		= require('vinyl-source-stream');
var buffer 		= require('vinyl-buffer');	
	
// compile typescript task	 
gulp.task("tscompile", function(){
	return gulp.src(["./src/*.ts"])
				.pipe(ts({module:"amd"}))
				// .pipe(concat("App.js"))
				.pipe(gulp.dest('./build'));
});	

// tscompile for external modules

gulp.task('tsc', function(){
	return browserify('./src/App.ts')
			.plugin(tsify)
			.bundle()
			.pipe(source('App.js'))
			.pipe(buffer())
			.pipe(gulp.dest('./build'));
});

// watch task
gulp.task('watchfiles', function(){
	return gulp.watch("./src/*.ts", ['cleanbuild', 'tscompile']);
});

// clean build dir task

gulp.task('cleanbuild', function(){
	return gulp.src("./build")
				.pipe(clean());
});


// default task
gulp.task('default', ['watchfiles']);