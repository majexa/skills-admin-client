var gulp = require('gulp');
var mongooseSchemeBuild = require('gulp-mongoose-scheme-build');

module.exports = gulp.task('mongoose-scheme-gen', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(mongooseSchemeBuild({
      schemasFolder: '/home/masted/www/skills-server/src/lib/db/schemas'
    }));
});
