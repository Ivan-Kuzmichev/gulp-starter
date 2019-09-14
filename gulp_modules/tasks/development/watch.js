const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports = function (options){
    return function(callback){
        if (options.styles != undefined) {
            gulp.watch(options.styles.watch, plugins.gulp.series(options.styles.task))
            .on('unlink', function(filepath){
                delete plugins.cached.caches.styles[plugins.path.resolve(filepath)];
                plugins.remember.forget(options.styles.task, plugins.path.resolve(filepath));
            });
        }
        if (options.templates != undefined) {
            gulp.watch(options.templates.watch, gulp.series(options.templates.task))
            .on('unlink', function(filepath){
                delete plugins.cached.caches.templates[plugins.path.resolve(filepath)];
                plugins.remember.forget(options.templates.task, plugins.path.resolve(filepath));
            });
        }
        if (options.scripts != undefined) {
            gulp.watch(options.scripts.watch, gulp.series(options.scripts.task));
        }
        if (options.images != undefined) {
            gulp.watch(options.images.watch, gulp.series(options.images.task));
        }
        if (options.fonts != undefined) {
            gulp.watch(options.fonts.watch, gulp.series(options.fonts.task));
        }
    }
}