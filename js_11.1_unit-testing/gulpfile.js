var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var jasmine = require('gulp-jasmine');

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('css/style.css');
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
    
});

gulp.task('jasmine', () =>
    gulp.src('js/spec.js') 
        .pipe(jasmine())
);

gulp.task('default', function(callback) {
    runSequence(['browserSync', 'watch'], callback);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });
});