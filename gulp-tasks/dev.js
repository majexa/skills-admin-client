var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = gulp.task('dev', function () {
  browserSync.init({
    server: {
      baseDir: 'build/public',
      index: 'index.html'
    }
  });
  gulp.watch('index.html', ['copy-index']);
  //gulp.watch('m/**/*', ['copy-m']);
  gulp.watch([
    '/home/user/ngn-env/ngn/i/js/ngn/**/*.js',
    '/home/user/ngn-env/ngn/i/css/**/*.css',
    'm/**/*'
  ], ['ngn-build']);
  gulp.watch([
    'build/public/m/css/*.css',
    'build/public/m/js/*.js',
    'build/public/index.html',
    'build/public/m/js/formTmpl/*.js'
  ]).on('change', browserSync.reload);
  gulp.watch([
    'models/*.json'
  ], ['ngn-form-build']);
});
