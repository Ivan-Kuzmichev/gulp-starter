'use strict';

let gulp = require('gulp'),
    task = require('./gulp_modules/load');

task('assets', 'copying', {
    src: './app/assets/**/*',
    dest: './gulp_modules/cache/assets'
})

task('fonts', 'development/fonts', {
    src: './app/fonts/**/*',
    dest: './gulp_modules/cache/fonts'
})

task('images', 'development/images', {
    src: './app/images/**/*',
    dest: './gulp_modules/cache/images'
})

task('scripts', 'development/scripts', {
    src: ['./app/scripts/*.js', '!./app/scripts/_*.js'],
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
    watch: ['./gulp_modules/cache/**/*']
})

task('watch', 'development/watch', {
    styles: {
        watch: './app/styles/**/*.scss',
        task: 'styles'
    },
    templates: {
        watch: './app/templates/**/*.html',
        task: 'templates'
    },
    images: {
        watch: './app/images/**/*',
        task: 'images'
    },
    fonts: {
        watch: './app/fonts/**/*',
        task: 'fonts'
    }
})

gulp.task('default', gulp.series(
    gulp.parallel('templates', 'styles', 'fonts', 'images', 'scripts', 'assets'),
    gulp.parallel('watch', 'server')
));

task('clean', 'clean', {
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
    dest: './dist/styles'
})

task('templates:build', 'production/templates', {
    src: ['./app/templates/**/*.html', '!./app/templates/**/_*.html'],
    path: ['./app/templates/'],
    dest: './dist'
})

gulp.task('build', gulp.series(
    gulp.parallel('favicons', 'images:build'),
));