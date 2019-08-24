module.exports = function(){
    $.gulp.task('scss', function(end){
        return $.gulp.src('app/scss/**/*.scss')
            .pipe($.sass())
            .on('error', $.notify.onError(function (error) {
                return "A task sсss error occurred: " + error.message;
            }))
            .pipe($.postcss([
                require('postcss-font-magician')({
                    display: 'swap',
                    formats: 'woff2 woff ttf',
                    hosted: './app/font'
                }),
                require('postcss-short')(),
                require('postcss-animation')(),
                require('autoprefixer')()
            ]))
            .on('error', $.notify.onError(function (error) {
                return "A task postcss error occurred: " + error.message;
            }))
            .pipe($.gulp.dest('./gulp_modules/cache/css'))
            .on('end', $.browserSync.reload)
        end();
    });
}