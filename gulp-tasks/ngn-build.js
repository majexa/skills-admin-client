var gulp = require('gulp');
var ngnJs = require('gulp-ngn-js');
var ngnCss = require('gulp-ngn-css');

module.exports = gulp.task('ngn-build', function () {
  var opt = {
    ngnEnvFolder: '/home/user/ngn-env',
    buildFolder: 'build/public/m',
    name: 'main'
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: false
  };
  gulp.src('index.html', {read: false})
    .pipe(ngnJs(opt))
    .pipe(ngnJs.reporter(reportOptions))
    // .pipe(ngnCss(opt))
    // .pipe(ngnCss.reporter(reportOptions));
});
