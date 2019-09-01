const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*', '!@*']});

module.exports = function (options){
    return function(callback){

        var configSrcSet = plugins.responsiveConfig(
            options.srcset, 
            {extensions: ['jpg', 'jpeg', 'png', 'webp']}
        );
        
        return plugins.merge2(
               gulp.src(options.src)
                   .pipe(plugins.webp()),
               gulp.src(options.src)
            )
            .pipe(plugins.responsive(configSrcSet, {
                errorOnEnlargement: false,
                withMetadata: false
            }))
            .pipe(plugins.imagemin([
                plugins.imageminGifsicle({interlaced: true}),
                plugins.imageminJpegRecompress({
                    progressive: true,
                    max: 80,
                    min: 70
                }),
                plugins.imageminPngquant({quality: '80'}),
                plugins.imageminSvgo({plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]}),
                plugins.imageminWebp({quality: 80})
            ]))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}