module.exports = function(){
    $.gulp.task('watch', function(end) {
        $.gulp.watch('./app/scss/**/*.scss', $.gulp.series('scss'));
        $.gulp.watch('./app/nunjucks/**/*.html', $.gulp.series('nunjucks'));
        // $.gulp.watch(p.main.fullPathJs, $.browserSync.reload);
        // $.gulp.watch(p.main.fullPathCss, $.browserSync.reload);
        end();
    });
}