var gulp = require('gulp');
var crudRoutesBuild = require('gulp-crud-routes-build');

module.exports = gulp.task('crud-routes-gen', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(crudRoutesBuild({
      crudFile: '/home/masted/www/skills-server/src/core/crud',
      routersFolder: '/home/masted/www/skills-server/src/lib/crudRoutes'
    }));
});
