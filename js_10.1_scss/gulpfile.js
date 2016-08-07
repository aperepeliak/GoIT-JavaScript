var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cache = require('gulp-cache');

gulp.task('js', function() {
    gulp.src([
            'app/js/*.js', '!app/js/main.js', '!app/js/jquery.jcarousel.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('pages', function() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('plugin', function() {
    return gulp.src('app/js/jquery.jcarousel.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean:dist', function () {
    return del.sync('dist');
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            progressive: true,
            interlaced: true
         })))
         .pipe(gulp.dest('dist/images'));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browserSync', 'sass', 'js'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/js/*.js', ['js']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/main.js', browserSync.reload);  
});

gulp.task('default', function(callback) {
    runSequence(['sass', 'js', 'browserSync', 'watch'], callback);
});

gulp.task('uglify', function() {
    return gulp.src('app/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('cssnano', function() {
    return gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('build', function (callback) {
   runSequence('clean:dist',
        ['cssnano', 'uglify', 'images', 'plugin', 'pages'],
        callback); 
});