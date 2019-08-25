'use strict';

let gulp = require('gulp'),
    task = require('gulp-lazy-task')('./gulp_modules/tasks');

task('fonts', {
    src: './app/fonts/**/*',
    dest: './gulp_modules/cache/fonts'
})

task('images', {
    src: './app/images/**/*',
    dest: './gulp_modules/cache/images'
})

task('scripts', {
    src: ['./app/scripts/**/*.js', '!./scripts/js/**/_*.js'],
    dest: './gulp_modules/cache/scripts'
})

// gulp.task('default', gulp.series(
//     gulp.parallel('templates', 'styles', 'fonts', 'images', 'scripts'),
//     gulp.parallel('watch', 'server')
// ));