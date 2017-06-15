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
    'bundles/**',
    'src/**/*.d.ts',
    'src/**/*.map'
  ]);
}

function styles() {
  return gulp.src(['./src/sass/styles.scss', './src/sass/pioneer-tree.scss'])
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
  return gulp.src(['./src/sass/pioneer-tree.scss', './src/site/pioneer-tree.css'])
    .pipe(gulp.dest('./dist/styles'));
}

function watch() {
  gulp.watch([
    "./src/sass/**/*.scss"
  ], styles);
}

gulp.task('clean', gulp.series(
  clean
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


/******************** 
  gh-pages
********************/

/**
 * Clean the .github/gh-page directory
 */
function cleanGhPages() {
  return del([
    './.github/gh-pages/**/*'
  ]);
}

/**
 * Move root assets that defer from site assets
 */
function moveRootGhPages() {
  return gulp.src([
    './.github/site/**/*'
  ])
    .pipe(gulp.dest('./.github/gh-pages'));
}

/**
 * Send all pre-built assets to the .github/gh-page dir
 */
function moveStylesGhPages() {
  return gulp.src([
    './src/site/styles.css',
    './src/site/pioneer-tree.css'
  ])
    .pipe(gulp.dest('./.github/gh-pages/pioneer-tree'));
}

/**
 * Send all pre-built assets to the .github/gh-page dir
 */
function moveGhPages() {
  return gulp.src([
    './src/site/**/*',
    '!./src/site/index.html',
    '!./src/site/systemjs.config.js',
    '!./src/site/**/*.ts',
    '!./src/site/**/*spec.js',
    '!./src/site/*.css'
  ])
    .pipe(gulp.dest('./.github/gh-pages'));
}

/**
 * Send all node modules to the .github/gh-page dir
 */
function moveNodeGhPages() {
  return gulp.src([
    './node_modules/@angular/**/*',
    './node_modules/core-js/**/*',
    './node_modules/zone.js/**/*',
    './node_modules/systemjs/**/*',
    './node_modules/rxjs/**/*'
  ],  {base: './node_modules/'})
    .pipe(gulp.dest('./.github/gh-pages/pioneer-tree/node_modules'));
}

/**
 * Deploy to gh-pages branch
 */
function deployGhPages() {
  return gulp.src('./.github/gh-pages/**/*')
    .pipe(ghPages());
}

gulp.task('deploy:gh-pages', gulp.series(
  styles,
  cleanGhPages,
  moveStylesGhPages,
  moveGhPages,
  moveRootGhPages,
  moveNodeGhPages,
  deployGhPages
));