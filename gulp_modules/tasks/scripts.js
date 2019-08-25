module.exports = function (options, callback) {

    this.named = require('vinyl-named');
    this.webpack = require('webpack-stream');
    this.browserSync = require('browser-sync');

    return this.gulp.src(options.src)
        .pipe(this.named())
        .on('error', this.notify.onError(function (error) {
            return "Scripts! Named error: " + error.message;
        }))

        .pipe(this.webpack({
            config: require('../../gulp_modules/webpack.config.js')
        }))
        .on('error', this.notify.onError(function (error) {
            return "Scripts! Webpack error: " + error.message;
        }))

        .pipe(this.gulp.dest(options.dest))
        .pipe(this.browserSync.stream())
    callback();
}