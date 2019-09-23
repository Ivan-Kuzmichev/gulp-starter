const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.vinylNamed())
            .pipe(plugins.webpackStream({
                mode: 'production',
                watch: false,
                output: {
                    filename: "[name].js"
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/
                        }, {
                            test: /\.ts$/,
                            use: 'ts-loader',
                            exclude: /node_modules/
                        }
                    ]
                },
                plugins: [
                    new plugins.babelMinifyWebpackPlugin(),
                    new plugins.terserWebpackPlugin({
                        parallel: true
                    })
                ]
            }))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}
