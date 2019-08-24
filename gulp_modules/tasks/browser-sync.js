module.exports = function(){
	$.gulp.task('browser-sync', function(end) {
		$.browserSync({
			server: {
				baseDir: './gulp_modules/cache'
			},
			notify: false,
			open: false
		})
		end();
	});
}