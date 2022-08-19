const {src, dest, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const include = require('gulp-file-include')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')

function html() {
    return src('src/**.html')
    .pipe(include({
        prefix: '@@'
    }))
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest('build'))
} 

function css() {
    return src('src/css/**.css')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('build'))
}


exports.build = series(css, html)
