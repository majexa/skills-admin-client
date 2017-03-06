var gulp = require('gulp');
var crudRoutesBuild = require('gulp-crud-routes-build');

module.exports = gulp.task('crud-routes-gen-user', function () {
  gulp.src('modelsUser/*.json', {read: false})
    .pipe(crudRoutesBuild({
      routersFolder: '../skills-server/src/lib/crudRoutes',
      opt: {
        extendPath: '/user{user}'
      }
    }));
});
