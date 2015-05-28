var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var paths = {
  javascript: [
    'src/**/*.js',
    '!src/browser/vendor/**/*.*'
  ],
  html: [
    'src/**/*.html',
    '!src/browser/vendor/**/*.*'
  ],
  vendor: 'src/browser/vendor/**/*.*'
};

gulp.task('compile', function() {
  gulp.src(paths.javascript)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(babel({
      optional: ['runtime']
    }))
    .pipe(gulp.dest('out/'));
});

gulp.task('copy-html', function() {
  gulp.src(paths.html)
    .pipe(gulp.dest('out/'));
});

gulp.task('copy-vendor', function() {
  gulp.src(paths.vendor)
    .pipe(gulp.dest('out/browser/vendor/'));
});

gulp.task('watch', ['compile', 'copy-html', 'copy-vendor'], function() {
  gulp.watch(paths.javascript, ['compile']);
  gulp.watch(paths.html, ['copy-html']);
  gulp.watch(paths.vendor, ['copy-vendor']);
});

gulp.task('default', ['watch']);

