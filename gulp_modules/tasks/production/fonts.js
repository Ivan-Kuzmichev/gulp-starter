const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports.process = function (options){
    return function(callback){
        return  plugins.merge2(
            gulp.src(options.src)
                .pipe(plugins.ttf2woff()),
            gulp.src(options.src)
                .pipe(plugins.ttf2woff2()),
            gulp.src(options.src)
        )
            .pipe(gulp.dest(options.dest))
        callback();
    }
}
