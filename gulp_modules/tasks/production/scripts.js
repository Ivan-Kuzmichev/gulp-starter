const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.vinylNamed())
            .pipe(plugins.webpackStream({
                mode: 'development',
                watch: false,
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
                }
            }))
            .pipe(plugins.uglifyjs())
            .pipe(gulp.dest(options.dest))
        callback();
    }
}