var gulp = require('gulp');
var crudRoutesBuild = require('../crudRoutesBuild');

module.exports = gulp.task('crud-routes-gen', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(crudRoutesBuild({
      routersFolder: '/home/user/www/skills-server/src/lib/crudRoutes'
    }));
});
