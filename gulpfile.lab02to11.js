/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    dest = require('gulp-dest'),
	babel = require("gulp-babel"),
    webpackConfig = require("./webpack.config.js"),
    gulpWebpack = require('webpack-stream'),
    webpack = require('webpack');


var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";

gulp.task("clean", function (cb) {
    rimraf(paths.minJs, cb);
});

gulp.task("min", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(babel())
        .pipe(dest('.', { ext: '.min.js' }))
        .pipe(gulp.dest('./'));
});
