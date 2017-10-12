var gulp = require("gulp"),
    less = require("gulp-less"),
    postcss = require('gulp-postcss'),
    cssurl = require('gulp-cssurl'),
    base64 = require('gulp-base64'),
    webpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config'),
    uglify = require('gulp-uglify'),
    processors = [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('postcss-pxtorem')({
            //rootValue: 33.75 * 3,// 1080/3 1080的设计稿 flexible.js
            rootValue: 3.375 * 100,// 1080/3 1080的设计稿 autoFize.js
            unitPrecision: 5,
            propWhiteList: [],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }),
        require('cssnano')
    ],
    path = {
        dist: 'dist/',
        dev: 'dev/'
    }

gulp.task("help",function(){
    var tasks = Object.keys(gulp.tasks);
    for(var task in tasks){
        console.log("gulp %s",tasks[task]);
    }
});

gulp.task('copy', function () {
    gulp.src(path.dev + '/fonts/fonts/*')
        .pipe(gulp.dest(path.dist + "/css/fonts"))
    gulp.src(path.dev + '/img/*')
        .pipe(gulp.dest(path.dist + "/images"))
    gulp.src(path.dev + '/js/*')
        .pipe(gulp.dest(path.dist + "/js"))
});
/*waltonchain---start---*/

gulp.task('styles:less', function () {
    gulp.src(path.dev + "/less/styles.less")
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(cssurl())
        .pipe(base64({maxImageSize: 20 * 1024}))
        .pipe(gulp.dest(path.dist + "/css/"))
});

gulp.task('styles', ['copy', 'styles:less'], function () {
    gulp.watch(path.dev + '/images/*', ['copy'])
    gulp.watch(path.dev + '/js/*', ['copy'])
    gulp.watch(path.dev + '/fonts/fonts/*', ['copy'])
    gulp.watch(path.dev + "/less/**/*.less", ['styles:less'])
    gulp.watch(path.dev + '/fonts/fonts/*', ['styles:less'])
});

/*waltonchain---end---*/