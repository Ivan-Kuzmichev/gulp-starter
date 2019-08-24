module.exports = function(){
    $.gulp.task('scripts', function(end){
        return $.gulp.src('./app/scripts/**/*.js', '!./scripts/js/**/_*.js')
            .pipe($.named())
            .on('error', $.notify.onError(function (error) {
                return "Scripts! Named error: " + error.message;
            }))

            .pipe($.webpack({
                config: $.path.webpackConfig
            }))
            .on('error', $.notify.onError(function (error) {
                return "Scripts! Webpack error: " + error.message;
            }))

            .pipe($.gulp.dest('./gulp_modules/cache/scripts'))
            .pipe($.browserSync.stream());
        end();
    });
}