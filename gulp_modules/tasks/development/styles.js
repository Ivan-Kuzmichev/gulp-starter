const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports.process = function (options){
    plugins.sass.compiler = plugins.nodeSass;
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.plumber({
                errorHandler: plugins.notify.onError(`
                    \nError in task ${options.taskName}: \n<%= error.message %>
                `)
            }))
            .pipe(plugins.cached(options.taskName))
            .pipe(plugins.dependents())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass())
            .pipe(plugins.postcss([
                plugins.postcssShort(),
                plugins.postcssAnimation(),
                plugins.autoprefixer()
            ]))
            .pipe(plugins.remember('styles'))
            .pipe(plugins.groupCssMediaQueries())
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream());

        callback();
    }
}

module.exports.watch = function (options) {
    gulp.watch(options.src, plugins.gulp.series(options.taskName))
    .on('unlink', function(filepath){
        delete plugins.cached.caches[options.taskName][plugins.path.resolve(filepath)];
        plugins.remember.forget(options.taskName, plugins.path.resolve(filepath));
    });
}
