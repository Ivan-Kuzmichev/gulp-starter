module.exports = function(){
    $.gulp.task('images', function(end){
        return $.gulp.src('./app/img/**/*')
        .pipe($.tinypng({
			key: tinypngKey,
			sigFile: 'dist/.tinypng-sigs',
			log: true
		}))
		.pipe($.imagemin({
			progressive: true,
			speed: 1,
			floyd: 1,
			verbose: true
		}))
		.pipe($.gulp.dest('./gulp_modules/cache/img'))
		end();
    });
}