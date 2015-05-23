var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('compile', function() {
  gulp.src('src/**/*.js')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(babel())
    .pipe(gulp.dest('out/'));
});

gulp.task('watch', ['compile'], function() {
  gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('default', ['watch']);

