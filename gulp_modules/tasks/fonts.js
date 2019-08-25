module.exports = function (options, callback) {
    return this.gulp.src(options.src, {since: this.gulp.lastRun('fonts')})
        .pipe(this.newer(options.dest))
        .pipe(this.gulp.dest(options.dest))
    callback();
}