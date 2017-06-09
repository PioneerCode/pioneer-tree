var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

var sassPaths = [
  'node_modules/normalize.scss/sass',
  'node_modules/foundation-sites/scss'
];

function clean() {
  return del([
    '_temp/**',
    'bundles/**',
    'src/**/*.d.ts',
    'src/**/*.map'
  ]);
}

function styles() {
  return gulp.src(['./src/sass/styles.scss'])
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(cleanCss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest('./src/site'));
}


function watch() {
  gulp.watch([
    "./src/sass/**/*.scss"
  ], styles);
}

function deployGhPages() {
  return gulp.src('./src/site/**/*')
    .pipe(ghPages());
}

gulp.task('clean', gulp.series(
  clean
));

gulp.task('deploy:gh-pages', gulp.series(
  deployGhPages
));

gulp.task('default', gulp.series(
  clean,
  styles,
  gulp.parallel(watch)
));