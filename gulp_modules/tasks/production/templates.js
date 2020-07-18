const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports.process = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.nunjucksRender({
                path: options.path
            }))
            .pipe(plugins.embedSvg({
                selectors: ['svg[src$=".svg"]'],
                root: './app',
                decodeEntities: true
            }))
            .pipe(plugins.htmlmin({
                collapseWhitespace: true,
                removeComments: true
            }))
            .pipe(gulp.dest(options.dest))

        callback();
    }
}
