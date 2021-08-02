"use strict";
const path = require("path");
const gulp = require("gulp");
const sass = require('gulp-sass')(require('node-sass'));
const sassLint = require("gulp-sass-lint");
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

const PROJECT_DIR = path.resolve(__dirname);
const SASS_FILES = `${PROJECT_DIR}/src/scss/**/*.scss`;
const SASS_LINT_FILES = [
  `${PROJECT_DIR}/src/scss/**/*.scss`,
  `!${PROJECT_DIR}/src/scss/elements/_reset.scss`,
  `!${PROJECT_DIR}/src/scss/helpers/_colours.scss`,
];
const CSS_DIR = `${PROJECT_DIR}/static`;
const CSS_FILES = `${PROJECT_DIR}/static/**/*.css`;
const CSS_MAPS = `${PROJECT_DIR}/static/**/*.css.map`;
const IMAGES_SRC = `${PROJECT_DIR}/src/scss/images/**/*`;
const IMAGES_DEST = `${PROJECT_DIR}/static/images/`;
const FONTS_SRC = `${PROJECT_DIR}/src/scss/fonts/**/*`;
const FONTS_DEST = `${PROJECT_DIR}/static/fonts/`;

gulp.task("lint", function() {
  console.log(`${PROJECT_DIR}/src/scss/elements/_reset.scss`);
  return gulp
    .src(SASS_LINT_FILES)
    .pipe(
      sassLint({
        options: {
          formatter: "stylish",
          "merge-default-rules": true,
        },
        configFile: "sass-lint-config.yml",
      })
    )
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task("clean", function() {
  return del([CSS_FILES, CSS_MAPS]);
});

gulp.task("sass:compile", function() {
  return gulp
    .src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest(CSS_DIR));
});

gulp.task("images", function() {
  return gulp.src(IMAGES_SRC).pipe(gulp.dest(IMAGES_DEST));
});

gulp.task("copy-fonts", () => gulp.src(FONTS_SRC).pipe(gulp.dest(FONTS_DEST)));

gulp.task("watch", function() {
  gulp.watch([SASS_FILES], gulp.series("sass:compile"));
});

gulp.task("styles", gulp.series("clean", "sass:compile"));

// No server nor watch
gulp.task("build", gulp.series("clean", "images", "copy-fonts", "styles"));

gulp.task(
  "default",
  gulp.series("build", "watch")
);
