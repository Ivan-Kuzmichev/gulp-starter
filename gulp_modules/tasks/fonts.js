module.exports = function(){
    $.gulp.task('fonts', function(end){
        return $.gulp.src('./app/font/**/*')
        .pipe($.gulp.dest('./gulp_modules/cache/font'))
        end();
    });
}