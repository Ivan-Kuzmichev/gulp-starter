const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.vinylNamed())
            .on('error', plugins.notify.onError(function (error) {
                return "Scripts! Named error: " + error.message;
            }))

            .pipe(plugins.webpackStream({
                config: require('../../gulp_modules/webpack.config.js')
            }))
            .on('error', plugins.notify.onError(function (error) {
                return "Scripts! Webpack error: " + error.message;
            }))

            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream())
        callback();
    }
}