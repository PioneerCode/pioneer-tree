var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

function clean() {
  return del([
    '_temp/**',
    'bundles/**',
    'src/**/*.d.ts',
    'src/**/*.map'
  ]);
}

function styles() {
  return gulp.src(['assets/*'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(cleanCss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('./app/pbi/deps'));
}

function watch() {
  gulp.watch([
    "./dev/styles/**/*.scss",
    "./dev/widgets/pbi**/*.scss",
    "./dev/deps/ui/**/*.scss",
    "./dev/deps/extensions/**/*.scss",
    "./dev/deps/directives/**/*.scss"
  ], styles);
}

gulp.task('clean', gulp.series(
  clean
));

gulp.task('default', gulp.series(
  clean,
  styles,
  gulp.parallel(watch)
));
