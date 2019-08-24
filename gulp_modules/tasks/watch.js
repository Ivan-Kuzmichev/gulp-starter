module.exports = function(){
    $.gulp.task('watch', function(end) {
        $.gulp.watch('./app/styles/**/*.scss', $.gulp.series('styles')).on('unlink', function(filepath){
            $.remember.forget('styles', $.path.resolve(filepath));
            delete $.cached.caches.styles[$.path.resolve(filepath)];
        });
        $.gulp.watch('./app/templates/**/*.html', $.gulp.series('templates')).on('unlink', function(filepath){
            $.remember.forget('templates', $.path.resolve(filepath));
            delete $.cached.caches.templates[$.path.resolve(filepath)];
        });
        $.gulp.watch('./app/images/**/*', $.gulp.series('images'));
        $.gulp.watch('./app/fonts/**/*', $.gulp.series('fonts'));
        end();
    });
}