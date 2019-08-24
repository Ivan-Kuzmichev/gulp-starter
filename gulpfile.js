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
    nunjucks: require('gulp-nunjucks-render'),
    webpack: require('webpack-stream'),
    named: require('vinyl-named'),
    gulplog: require('gulplog'),
    browserSync: require('browser-sync'),


    /**----- Сборка проекта -----**/
    useref: require('gulp-useref'),
    del: require('del'),
    babel: require('gulp-babel'),
    uglify: require('gulp-uglifyjs'),
    tinypng: require('gulp-tinypng-compress'),
    imagemin: require('gulp-imagemin'),
    embedSvg: require('gulp-embed-svg'),
    responsive: require('gulp-responsive'),
	htmlmin: require('gulp-htmlmin'),
	gcmq: require('gulp-group-css-media-queries'),
    cleancss: require('gulp-clean-css'),
    critical: require('critical').stream,
    path: {
        config: require('./gulp_modules/config.js'),
        settings: require('./gulp_modules/settings.js'),
        webpackConfig: require('./gulp_modules/webpack.config.js')
    }
};

// for (var module in $.path.config.module) console.log(global.$.module + ':' + require($.path.config.module[module]));
// console.log( module + ' ' + $.path.config.module[module]);

$.path.config.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('templates', 'styles', 'fonts', 'images', 'scripts'),
    $.gulp.parallel('watch', 'server')
));