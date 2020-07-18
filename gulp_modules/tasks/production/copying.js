const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports.process = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(gulp.dest(options.dest))
        callback();
    }
}
