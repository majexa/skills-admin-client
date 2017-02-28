var gulp = require('gulp');
var ngnForm = require('gulp-ngn-form');

if (!process.env.NGN_ENV_FOLDER) throw new Error('NGN_ENV_FOLDER not defined');
if (!process.env.PROJECT_FOLDER) throw new Error('PROJECT_FOLDER not defined');

gulp.task('ngn-form-build', function () {
  return gulp.src('models/*.json', {read: false})
    .pipe(ngnForm({
      ngnEnvFolder: process.env.NGN_ENV_FOLDER,
      projectFolder: process.env.PROJECT_FOLDER
    }))
    .pipe(gulp.dest('m/js/formTmpl'));
});