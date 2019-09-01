const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src) 
            .pipe(plugins.nunjucksRender({
                path: options.path
            }))
            .pipe(plugins.htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest(options.dest))

        callback();
    }
}