module.exports = function(){
    $.gulp.task('images', function(end){
        return $.gulp.src('./app/images/**/*', {since: $.gulp.lastRun('images')})
            .pipe($.newer('./gulp_modules/cache/images'))
		    .pipe($.gulp.dest('./gulp_modules/cache/images'))
		end();
    });
}