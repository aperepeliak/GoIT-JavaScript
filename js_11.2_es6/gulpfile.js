var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('js', function() {
    gulp.src([
            'app/es6/*.js'
        ])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', function() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('app/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
}); 

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('app/css/*.css');
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
    
});

gulp.task('default', function(callback) {
    runSequence([ 'js', 'css', 'pages', 'autoprefixer','browserSync', 'watch'], callback);
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});