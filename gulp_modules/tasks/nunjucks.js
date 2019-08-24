module.exports = function(){
    $.gulp.task('nunjucks', function(end){
        return $.gulp.src(['app/nunjucks/**/*.html', '!app/nunjucks/**/_*.html']) 
            .pipe($.nunjucks({
                path: ['app/nunjucks/']
            })).on('error', $.notify.onError(function (error) {
                return "A task nunjucks error occurred: " + error.message;
            }))
            .pipe($.gulp.dest('./gulp_modules/cache/'))
        end();
    });
}