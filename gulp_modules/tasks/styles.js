module.exports = function(){
    $.gulp.task('styles', function(end){
        return $.gulp.src('app/styles/**/*.scss')
            .pipe($.cached('styles'))
            .on('error', $.notify.onError(function (error) {
                return "Styles! Cached error: " + error.message;
            }))

            .pipe($.sass())
            .on('error', $.notify.onError(function (error) {
                return "Styles! Sсss error occurred: " + error.message;
            }))

            .pipe($.postcss([
                require('postcss-short')(),
                require('postcss-animation')(),
                require('autoprefixer')()
            ]))
            .on('error', $.notify.onError(function (error) {
                return "Styles! Postcss error: " + error.message;
            }))

            .pipe($.remember('styles'))
            .on('error', $.notify.onError(function (error) {
                return "Styles! Remember error: " + error.message;
            }))

            .pipe($.gulp.dest('./gulp_modules/cache/css'))
        end();
    });
}