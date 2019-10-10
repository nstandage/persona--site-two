
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css

function style() {
  return gulp
    .src("./app/styles/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./app/styles/css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "app/"
 //     index: "contact.html"
    }
  });
  gulp.watch("./app/styles/scss/**/*.scss", style);
  gulp.watch("./app/*.html").on("change", browserSync.reload);
  gulp.watch("./app/scripts/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
