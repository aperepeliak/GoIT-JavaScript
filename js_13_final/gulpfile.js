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

gulp.task('js', function () {
  gulp.src(['app/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('pages', function () {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
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

gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  });
});

gulp.task('watch', ['browserSync', 'build'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/*.html', ['pages']);
  gulp.watch('dist/*.html', browserSync.reload);
  gulp.watch('dist/js/main.js', browserSync.reload);
  gulp.watch('dist/css/main.css', browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'js', 'images', 'pages'],
    callback);
});