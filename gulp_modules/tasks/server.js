module.exports = function(){
	$.gulp.task('server', function(end) {
		$.browserSync.init({
			server: './gulp_modules/cache',
			notify: false,
			open: false
		});
		$.browserSync.watch(['./gulp_modules/cache/**/*', '!./gulp_modules/cache/styles/**/*', '!./gulp_modules/cache/*.html', '!./gulp_modules/cache/scripts/**/*',]).on('change', $.browserSync.reload);
		end();
	});
}