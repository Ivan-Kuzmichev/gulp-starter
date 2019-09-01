const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({pattern: ['*']});

module.exports = function (options){
    plugins.sass.compiler = require('node-sass');
    return function(callback){
        return gulp.src(options.src)
            .pipe(plugins.sass())
            .pipe(plugins.postcss([
                plugins.postcssShort(),
                plugins.postcssAnimation(),
                plugins.autoprefixer()
            ]))
            .pipe(plugins.groupCssMediaQueries())
            .pipe(plugins.purgecss({
                content: ['./app/templates/**/*.html', './app/scripts/**/*.js']
            }))
            .pipe(plugins.cleanCss({
                level: { 2: { specialComments: 0 },
                compatibility: 'ie9'
            }}))
            .pipe(gulp.dest(options.dest))
        callback();
    }
}