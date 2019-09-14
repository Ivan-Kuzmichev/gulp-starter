const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.vinylNamed())
            .on('error', plugins.notify.onError(function (error) {
                return "\nScripts! Named error: " + error.message;
            }))

            .pipe(plugins.webpackStream({
                watch: true,
                output: {
                    filename: "[name].js"
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: require.resolve("babel-loader"),
                                query: {
                                    presets: [
                                        ["@babel/preset-env", { modules: false }]
                                    ]
                                }
                            }
                        }
                    ]
                },
                plugins: [
                    new plugins.webpackStream.webpack.NoErrorsPlugin()
                ],
                resolve: {
                    alias: {
                        "%blocks%": plugins.path.resolve(__dirname, "src/blocks")
                    }
                }
            }))

            .pipe(gulp.dest(options.dest))
            .pipe(plugins.browserSync.stream())
        callback();
    }
}