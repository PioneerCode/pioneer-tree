var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var ghPages = require('gulp-gh-pages')

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
  return gulp.src(['./src/sass/styles.scss','./src/sass/pioneer-tree.scss'])
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

function moveReleaseApiAssets() {
  return gulp.src(['./src/site/app/lib/**/*.d.ts'])
    .pipe(gulp.dest('./dist/api'));
}

function moveReleaseStyleAssets() {
  return gulp.src(['./src/sass/pioneer-tree.scss','./src/site/pioneer-tree.css'])
    .pipe(gulp.dest('./dist/styles'));
}

function watch() {
  gulp.watch([
    "./src/sass/**/*.scss"
  ], styles);
}

function deployGhPages() {
  return gulp.src('./src/gh-pages/**/*')
    .pipe(ghPages());
}

gulp.task('clean', gulp.series(
  clean
));

gulp.task('deploy:gh-pages', gulp.series(
  deployGhPages
));

gulp.task('deploy:release', gulp.series(
  moveReleaseApiAssets,
  moveReleaseStyleAssets
));

gulp.task('default', gulp.series(
  clean,
  styles,
  gulp.parallel(watch)
));