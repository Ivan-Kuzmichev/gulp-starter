const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src) 

            .pipe(plugins.cached(options.taskName))
            .on('error', plugins.notify.onError(function (error) {
                return "\nTemplates! Cached error: " + error.message;
            }))

            .pipe(plugins.remember(options.taskName))
            .on('error', plugins.notify.onError(function (error) {
                return "\nTemplates! Remember error: " + error.message;
            }))

            .pipe(plugins.nunjucksRender({
                path: options.path
            }))
            .on('error', plugins.notify.onError(function (error) {
                return "\nTemplates! Nunjucks error: " + error.message;
            }))

            .pipe(plugins.embedSvg({
                selectors: ['svg[src$=".svg"]'],
                root: './app',
                decodeEntities: true
            }))
            .on('error', plugins.notify.onError(function (error) {
                return "\nTemplates! Embed Svg error: " + error.message;
            }))

            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream());

        callback();
    }
}