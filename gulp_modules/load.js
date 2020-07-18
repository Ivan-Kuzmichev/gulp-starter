const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports.task = function(taskName, path, options){
	options = options || {};
	options.taskName = taskName;
	let {process, watch} = require('./tasks/' + path);

	gulp.task(taskName, (callback) => {

		let task = process.call(this, options);
		return task(callback);
	})

	!!watch && watch(options);
}
