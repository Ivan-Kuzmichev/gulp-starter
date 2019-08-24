module.exports = function(){
    $.gulp.task('fonts', function(end){
        return $.gulp.src('./app/font/**/*', {since: $.gulp.lastRun('fonts')})
            .pipe($.newer('./gulp_modules/cache/fonts'))
            .pipe($.gulp.dest('./gulp_modules/cache/fonts'))
        end();
    });
}