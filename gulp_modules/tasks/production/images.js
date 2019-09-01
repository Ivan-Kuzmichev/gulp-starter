const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    console.log(plugins)
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.imagemin([
                plugins.imagemin.gifsicle({interlaced: true}),
                plugins.imageminJpegRecompress({
                    progressive: true,
                    max: 80,
                    min: 70
                }),
                plugins.imageminPngquant({quality: '80'}),
                plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
            ]))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}