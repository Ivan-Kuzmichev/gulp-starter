const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src, {since: gulp.lastRun(options.taskName)})
            .pipe(plugins.plumber({
                errorHandler: plugins.notify.onError(`
                    \nError in task ${options.taskName}: \n<%= error.message %>
                `)
            }))
            .pipe(plugins.newer(options.dest))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}
