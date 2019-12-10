'use strict';
const path = require('path');
const gulp = require('gulp');
const nodemon = require('nodemon');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

const PROJECT_DIR = path.resolve(__dirname);
const SASS_FILES = `${PROJECT_DIR}/sass/**/*.scss`;
const CSS_DIR = `${PROJECT_DIR}/css`;
const CSS_FILES = `${PROJECT_DIR}/css/**/*.css`;
const CSS_MAPS = `${PROJECT_DIR}/css/**/*.css.map`;


gulp.task('lint:sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sassLint({
      options: {
        formatter: 'stylish',
        'merge-default-rules': true
      },
      configFile: 'sass-lint-config.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('clean', function() {
  return del([CSS_FILES, CSS_MAPS])
});

gulp.task('sass:compile', function () {
  return gulp.src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(CSS_DIR));
});

gulp.task('watch', function () {
  gulp.watch(
    [SASS_FILES],
    gulp.series('sass:compile')
  );
});

gulp.task('server', function() {
  return nodemon({
    script: 'index.js',
  })
  .on('restart', function(){
    console.log('Changes detected. Restarting.');
  })
})

gulp.task('styles', gulp.series('clean', 'sass:compile'));

gulp.task(
  'default',
  gulp.series(
    'clean',
    'styles',
    gulp.parallel('server', 'watch'))
);
