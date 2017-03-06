var gulp = require('gulp');
var mongooseSchemeBuild = require('gulp-mongoose-scheme-build');

if (!process.env.SCHEMAS_FOLDER) throw new Error('SCHEMAS_FOLDER not defined');

module.exports = gulp.task('mongoose-scheme-gen-ṩ', function () {
  gulp.src('modelsUser/*.json', {read: false})
    .pipe(mongooseSchemeBuild({
      schemasFolder: process.env.SCHEMAS_FOLDER
    }));
});
