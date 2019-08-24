module.exports = {
    tasks: [
        /**----- Основной таск -----**/
        './gulp_modules/tasks/browser-sync',
        './gulp_modules/tasks/nunjucks',
        './gulp_modules/tasks/scss',
        './gulp_modules/tasks/watch',
        './gulp_modules/tasks/fonts',
        './gulp_modules/tasks/images',
        './gulp_modules/tasks/js',
    ],
    module: {
        gulp: 'gulp'
    }
}