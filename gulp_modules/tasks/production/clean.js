const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports.process = function (options){
    return function(callback){
        return plugins.del(options.src, {force:true});
        callback();
    }
}
