'use strict';

global.$ = {
    gulp: require('gulp'),
    newer: require('gulp-newer'),
    remember: require('gulp-remember'),
    path: require('path'),
    cached: require('gulp-cached'),
    notify: require('gulp-notify'),
    sass: require('gulp-sass'),
    postcss: require('gulp-postcss'),
    gcmq: require('gulp-group-css-media-queries'),
    nunjucks: require('gulp-nunjucks-render'),
    webpack: require('webpack-stream'),
    named: require('vinyl-named'),
    browserSync: require('browser-sync'),
    sourcemaps: require('gulp-sourcemaps'),
    path: {
        config: require('./gulp_modules/config.js'),
        settings: require('./gulp_modules/settings.js'),
        webpackConfig: require('./gulp_modules/webpack.config.js')
    }
};

$.path.config.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('templates', 'styles', 'fonts', 'images', 'scripts'),
    $.gulp.parallel('watch', 'server')
));