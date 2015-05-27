var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('compile', function() {
  gulp.src('src/**/*.js')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(babel({
      optional: ['runtime']
    }))
    .pipe(gulp.dest('out/'));
});

gulp.task('copy-html', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('out/'));
});

gulp.task('watch', ['compile', 'copy-html'], function() {
  gulp.watch('src/**/*.js', ['compile']);
  gulp.watch('src/**/*.html', ['copy-html']);
});

gulp.task('default', ['watch']);

