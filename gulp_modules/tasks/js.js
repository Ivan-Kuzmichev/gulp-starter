module.exports = function(){
    $.gulp.task('js', function(end){
        return $.gulp.src('./app/js/**/*')
        .pipe($.uglify())
        .pipe($.gulp.dest('./gulp_modules/cache/js'))
        end();
    });
}