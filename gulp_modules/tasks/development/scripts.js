const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports.process = function (options){
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
                resolve: {
                    extensions: [".ts", ".js"]
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
                }
            }))
            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream())

        callback();
    }
}
