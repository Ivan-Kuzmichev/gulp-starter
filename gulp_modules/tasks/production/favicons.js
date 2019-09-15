const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        gulp.src(options.src)
            .pipe(plugins.favicons({
                settings: { background: options.background}
            }))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}

