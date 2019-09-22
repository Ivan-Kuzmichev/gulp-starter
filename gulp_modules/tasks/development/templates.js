const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src) 
            .pipe(plugins.watch(options.src))
            .on('unlink', function(filepath){
                delete plugins.cached.caches[options.taskName][plugins.path.resolve(filepath)];
                plugins.remember.forget(options.taskName, plugins.path.resolve(filepath));
            })
            .pipe(plugins.plumber({
                errorHandler: plugins.notify.onError(`
                    \nError in task ${options.taskName}: \n<%= error.message %>
                `)
            }))
            .pipe(plugins.cached(options.taskName))
            .pipe(plugins.remember(options.taskName))
            .pipe(plugins.nunjucksRender({
                path: options.path
            }))
            .pipe(plugins.embedSvg({
                selectors: ['svg[src$=".svg"]'],
                root: './app',
                decodeEntities: true
            }))
            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream());

        callback();
    }
}