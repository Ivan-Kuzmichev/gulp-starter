'use strict';

let gulp = require('gulp'),
    {task} = require('./gulp_modules/load');

task('assets', 'development/copying', {
    src: './app/assets/**/*',
    dest: './gulp_modules/cache/assets'
})

task('fonts', 'development/copying', {
    src: './app/fonts/**/*',
    dest: './gulp_modules/cache/fonts'
})

task('images', 'development/copying', {
    src: './app/images/**/*',
    dest: './gulp_modules/cache/images'
})

task('scripts', 'development/scripts', {
    src: ['./app/scripts/*.{js,ts}', '!./app/scripts/_*.{js,ts}'],
    dest: './gulp_modules/cache/scripts'
})

task('styles', 'development/styles', {
    src: 'app/styles/**/*.{scss, sass}',
    dest: './gulp_modules/cache/styles'
})

task('templates', 'development/templates', {
    src: ['./app/templates/**/*.html', '!./app/templates/**/_*.html'],
    path: ['./app/templates/'],
    dest: './gulp_modules/cache/'
})

task('server', 'development/server', {
    server: './gulp_modules/cache',
    watch: './gulp_modules/cache/**/*'
})

gulp.task('default', gulp.series(
    gulp.parallel('templates', 'styles', 'fonts', 'images', 'assets'),
    gulp.parallel('scripts', 'server')
));

task('clean', 'production/clean', {
    src: './dist'
})

task('favicons', 'production/favicons', {
    background: '#1d1d1d',
    src: './app/assets/favicons/favicon.png',
    dest: './dist/assets/favicons/'
})

task('images:build', 'production/images', {
    src: './app/images/**/*',
    dest: './dist/images',
    srcset: [
        'app/styles/**/*.scss',
        'app/templates/**/*.html'
    ]
})

task('fonts:build', 'production/fonts', {
    src: './app/fonts/**/*',
    dest: './dist/fonts'
})

task('scripts:build', 'production/scripts', {
    src: ['./app/scripts/*.js', '!./app/scripts/_*.js'],
    dest: './dist/scripts'
})

task('styles:build', 'production/styles', {
    src: 'app/styles/**/*.{scss, sass}',
    dest: './dist/styles',
    use: ['./app/templates/**/*.html', './app/scripts/**/*.js']
})

task('templates:build', 'production/templates', {
    src: ['./app/templates/**/*.html', '!./app/templates/**/_*.html'],
    path: ['./app/templates/'],
    dest: './dist'
})

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('favicons', 'images:build', 'fonts:build', 'scripts:build', 'styles:build', 'templates:build'),
));
