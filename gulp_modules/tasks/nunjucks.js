module.exports = function(){
    $.gulp.task('templates', function(end){
        return $.gulp.src(['./app/templates/**/*.html', '!./app/templates/**/_*.html']) 
            .pipe($.cached('templates'))
            .on('error', $.notify.onError(function (error) {
                return "Templates! Cached error: " + error.message;
            }))

            .pipe($.nunjucks({
                path: ['./app/templates/']
            }))
            .on('error', $.notify.onError(function (error) {
                return "Templates! Nunjucks error: " + error.message;
            }))

            .pipe($.remember('styles'))
            .on('error', $.notify.onError(function (error) {
                return "Templates! Remember error: " + error.message;
            }))

            .pipe($.gulp.dest('./gulp_modules/cache/'))
        end();
    });
}