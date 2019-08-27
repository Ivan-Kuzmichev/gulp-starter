'use strict';

let gulp    = require('gulp'),
    task    = require('./gulp_modules/load');


task('fonts', 'fonts', {
    src: './app/fonts/**/*',
    dest: './gulp_modules/cache/fonts'
})

task('images', 'images', {
    src: './app/images/**/*',
    dest: './gulp_modules/cache/images'
})

task('scripts', 'scripts', {
    src: ['./app/scripts/**/*.js', '!./scripts/js/**/_*.js'],
    dest: './gulp_modules/cache/scripts'
})

task('styles', 'styles', {
    src: 'app/styles/**/*.{scss, sass}',
    dest: './gulp_modules/cache/styles'
})

task('templates', 'templates', {
    src: ['./app/templates/**/*.html', '!./app/templates/**/_*.html'],
    path: ['./app/templates/'],
    dest: './gulp_modules/cache/'
})

task('server', 'server', {
    server: './gulp_modules/cache',
    watch: [
        './gulp_modules/cache/**/*', 
        '!./gulp_modules/cache/styles/**/*', 
        '!./gulp_modules/cache/*.html', 
        '!./gulp_modules/cache/scripts/**/*'
    ]
})

task('watch', 'watch', {
    styles: {
        watch: './app/styles/**/*.scss',
        task: 'styles'
    },
    templates: {
        watch: './app/templates/**/*.html',
        task: 'templates'
    },
    scripts: {
        watch: './app/scripts/**/*',
        task: 'scripts'
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
    gulp.parallel('templates', 'styles', 'fonts', 'images', 'scripts'),
    gulp.parallel('watch', 'server')
));