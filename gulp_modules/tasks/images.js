module.exports = function(){
    $.gulp.task('images', function(end){
        return $.gulp.src('./app/img/**/*')
		.pipe($.gulp.dest('./gulp_modules/cache/img'))
		end();
    });
}