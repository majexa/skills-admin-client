var gulp = require('gulp');
var mongooseSchemeBuild = require('../mongooseSchemeBuild');

module.exports = gulp.task('mongoose-scheme-gen', function () {
  gulp.src('models/*.json', {read: false})
    .pipe(mongooseSchemeBuild({
      schemasFolder: '/home/user/www/skills-server/src/lib/db/schemas'
    }));
});
