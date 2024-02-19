// const { watch, src, series , dest} = require('gulp');
// const sass = require('gulp-sass')(require('sass'));


// const yargs = require('yargs');


// // const autoprefixer = require('gulp-autoprefixer');
// import autoprefixer from 'gulp-autoprefixer';
// // const replace = require('gulp-replace');
// const sourcemaps = require('gulp-sourcemaps');
// const gulp = require("gulp");
// // const fs = require('fs');
// // const cssbeautify = require('gulp-beautify');
// const gulpif = require("gulp-if");
// const cleanCSS = require("gulp-clean-css");
// const PRODUCTION = yargs.argv.prod;

// const paths = {
//     styles: {
//         src : ['assets/src/scss/admin/admin.scss'],
//         dest: 'assets/css'
//     },
// };


// function buildStyles() {
//     return gulp.src(paths.styles.src)
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulpif(PRODUCTION, cleanCSS()))
//         .pipe(autoprefixer({cascade: false}))
//         .pipe(gulp.dest(paths.styles.dest))
// };

// exports.buildStyles = buildStyles;

// function watchTask () {
//     watch(paths.styles.src, buildStyles);
// }

// exports.default = series(buildStyles, watchTask);
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );



const paths = {
    styles: {
        src : ['assets/src/scss/admin/admin.scss'],
        dest: 'assets/css'
    },
};
export default () => (
	gulp.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.styles.dest))
);