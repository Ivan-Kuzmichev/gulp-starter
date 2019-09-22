const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.vinylNamed())
            .pipe(plugins.webpackStream({
                mode: 'development',
                watch: true,
                devtool: 'eval-source-map',
                output: {
                    filename: "[name].js"
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/
                        }
                    ]
                },
                plugins: [
                    new plugins.webpackNotifier({
                        title: 'Webpack', 
                        skipFirstNotification: true,
                        alwaysNotify: false
                    })
                ]
            }))
            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream())
        callback();
    }
}