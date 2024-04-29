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
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import { fileURLToPath } from 'url';
import path from 'path';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sass = gulpSass(dartSass);

const paths = {
    styles: {
        src: [
            'assets/src/scss/admin/admin.scss',
            // 'assets/src/scss/elementor/style.scss',
            'assets/src/scss/elementor/button.scss',
            'assets/src/scss/elementor/icon.scss',
        ],
        dest: 'assets/css'
    },
};

// Define a task to compile SCSS to CSS
export const styles = () => (
    gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError)) // Compile SCSS to CSS
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest((file) => {
            // Get the directory name of the source file
            const dirname = path.dirname(file.path);
            // Get the relative path from the source directory to the file
            const relativeDir = path.relative(path.join(__dirname, 'assets/src/scss'), dirname);
            // Concatenate the destination directory with the source file's relative directory
            return path.join(__dirname, 'assets/css', relativeDir);
        }))
);
export const minifyStyles = () => (
    gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init()) // Initialize sourcemaps
        .pipe(cleanCSS({ compatibility: 'ie8' })) // Minify CSS
        .pipe(sourcemaps.write()) // Write sourcemaps
        .pipe(rename({ suffix: '.min' })) // Add .min suffix to filename
        .pipe(gulp.dest((file) => {
            // Get the directory name of the source file
            const dirname = path.dirname(file.path);
            // Get the relative path from the source directory to the file
            const relativeDir = path.relative(path.join(__dirname, 'assets/src/scss'), dirname);
            // Concatenate the destination directory with the source file's relative directory
            return path.join(__dirname, 'assets/css', relativeDir);
        }))
);

// Define a task to watch for changes in SCSS files
export const watch = () => {
    gulp.watch('assets/src/scss/**/*.scss', styles); // Watch for changes in SCSS files and trigger the styles task
};
// Task to build for production (minified CSS)
export const build = gulp.series(minifyStyles);

// Create a default task that runs the watch task by default
export default watch;