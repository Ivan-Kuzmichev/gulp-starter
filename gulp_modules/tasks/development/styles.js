const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    plugins.sass.compiler = require('node-sass');
    return function(callback){
        return gulp.src(options.src)

            .pipe(plugins.cached(options.taskName))
            .on('error', plugins.notify.onError(function (error) {
                return "\nStyles! Cached error: " + error.message;
            }))

            .pipe(plugins.sourcemaps.init())

            .pipe(plugins.sass())
            .on('error', plugins.notify.onError(function (error) {
                return "\nStyles! Sсss error occurred: " + error.message;
            }))

            .pipe(plugins.postcss([
                plugins.postcssShort(),
                plugins.postcssAnimation(),
                plugins.autoprefixer()
            ]))
            .on('error', plugins.notify.onError(function (error) {
                return "\nStyles! Postcss error: " + error.message;
            }))

            .pipe(plugins.remember('styles'))
            .on('error', plugins.notify.onError(function (error) {
                return "\nStyles! Remember error: " + error.message;
            }))

            .pipe(plugins.groupCssMediaQueries())
            .on('error', plugins.notify.onError(function (error) {
                return "\nStyles! Group media queries error: " + error.message;
            }))

            .pipe(plugins.sourcemaps.write())

            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream());

        callback();
    }
}