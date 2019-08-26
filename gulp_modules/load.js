const gulp = require('gulp');

module.exports = function(taskName, path, options){
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function (callback){
		let task = require('./tasks/' + path + '.js').call(this, options);
		return task(callback);
	})
}