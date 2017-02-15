var gulp = require('gulp');
var ngnForm = require('gulp-ngn-form');

gulp.task('ngn-form-build', function () {
  return gulp.src('models/*.json', {read: false})
    .pipe(ngnForm({
      ngnEnvFolder: '/home/user/ngn-env'
    }))
    .pipe(gulp.dest('m/js/formTmpl'));
});