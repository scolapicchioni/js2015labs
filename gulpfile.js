/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    webpackConfig = require("./webpack.config.js"),
    gulpWebpack = require('webpack-stream'),
    webpack = require('webpack');

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.bundleJs = paths.webroot + "{js/**/*.min.js,js/**/*.bundle.js,js/**/*.bundle.js.map}";

gulp.task("clean", function (cb) {
    rimraf(paths.bundleJs, cb);
});

gulp.task('webpack', [], function () {
    return gulp.src('./wwwroot/js/lab12.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest('./wwwroot/js'));
});