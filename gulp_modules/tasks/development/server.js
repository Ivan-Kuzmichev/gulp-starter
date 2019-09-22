const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){
        plugins.browserSync.init({
			server: options.server,
			notify: false,
			open: false
		})
		plugins.browserSync.watch(options.watch).on('change', plugins.browserSync.reload)
		callback()
    }
}
