const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src, {since: gulp.lastRun(options.taskName)})
            .pipe($.newer(options.dest))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}