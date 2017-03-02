var gulp = require('gulp');
var append = require('gulp-append');

module.exports = gulp.task('appender', function () {
  return gulp.src('m/shit')
    .pipe(append('some/path/appended-file.json'));
});