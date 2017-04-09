var gulp = require('gulp');

var less = require('gulp-less');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var path = require('path');

gulp.task('less', function () {
    return gulp.src('less/**/*.less')
        .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concat('less-files.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

gulp.task('plugins', function () {
    var pluginsjs = gulp.src('js/plugins/*.js')
        .pipe(concat('plugins.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'));
    var pluginscss = gulp.src('css/plugins/*.css')
        .pipe(concat('plugins.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
    return [pluginsjs,pluginscss];
});

gulp.task('watch', function(){
  gulp.watch('less/**/*.less', ['less']); 
})