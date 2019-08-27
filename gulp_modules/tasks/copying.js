const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.size())
            .pipe(gulp.dest(options.dest))
        callback();
    }
}