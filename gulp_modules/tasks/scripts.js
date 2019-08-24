module.exports = function(){
    $.gulp.task('scripts', function(end){
        let firstBuildReady = false;

        function done(err, stats) {
            firstBuildReady = true;

            if(err) {
                return
            }
            gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
                colors: true
            }));
        }

        return $.gulp.src('./app/scripts/**/*.js', '!./scripts/js/**/_*.js')
            .pipe($.named())
            .on('error', $.notify.onError(function (error) {
                return "Scripts! Named error: " + error.message;
            }))

            .pipe($.webpackStream(options.webpack, null, done))
            .on('error', $.notify.onError(function (error) {
                return "Scripts! Webpack error: " + error.message;
            }))

            .pipe($.gulp.dest('./gulp_modules/cache/scripts'))
            .on('date', function(){
                if (firstBuildReady) {
                    end();
                }
            })
    });
}