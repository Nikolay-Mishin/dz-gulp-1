var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('server', function (done) {
    browserSync.init({
    	server: { baseDir: './app/' }
    });
    gulp.watch('./app/**/*.html').on('change', browserSync.reload);
    gulp.watch('./app/less/**/*.less', gulp.series('styles'));
    done();
});

gulp.task('styles', function (done) {
    gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
    done();
});

gulp.task('default', gulp.series('styles', 'server'));