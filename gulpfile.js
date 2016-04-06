var gulp = require('gulp');
var minify = require('gulp-minify');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('serve', ['less', 'compress'], function() {

	browserSync.init({
			server: {
					baseDir: "./build"
			}
	});

	gulp.watch("./less/*.less", ['less']).on('change', browserSync.reload);
	gulp.watch("./js/*.js", ['compress']).on('change', browserSync.reload);
	gulp.watch("./build/*.html").on('change', browserSync.reload);

});


gulp.task('compress', function () {
	return gulp.src('./js/**/*.js')
		.pipe(minify())
		.pipe(gulp.dest('./build/js'));
});

gulp.task('less', function() {
    return gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./build/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
