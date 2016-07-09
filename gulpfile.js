var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');

gulp.task('hello', function() {
  console.log('Hello World!');
});

gulp.task('sass',function() {
  return gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// gulp-watch

gulp.task('watch', ['browserSync', 'sass'], function() {
  livereload.listen();
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js',browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });
});

// gulp-uglify

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('dist'));
});



