const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports = function (options){
    return function(callback){
        return plugins.del(options.src, {force:true});
        callback();
    }
}