const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports.task = function(taskName, path, options){
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, (callback) => {
		if (path.includes('development') === true && path.includes('server') === false && path.includes('scripts') === false) {
			if (path.includes('styles') === true || path.includes('templates') === true) {
				gulp.watch(options.src, plugins.gulp.series(options.taskName))
				.on('unlink', function(filepath){
					delete plugins.cached.caches[options.taskName][plugins.path.resolve(filepath)];
					plugins.remember.forget(options.taskName, plugins.path.resolve(filepath));
				});
			} else {
				gulp.watch(options.src, plugins.gulp.series(options.taskName))
			}
        }
		let task = require('./tasks/' + path).call(this, options);
		return task(callback);
	})
}
