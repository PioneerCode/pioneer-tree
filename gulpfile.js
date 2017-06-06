var gulp = require('gulp');
var del = require('del');

function clean() {
  return del([
    '_temp/**',
    'bundles/**',
    'src/**/*.d.ts',
    'src/**/*.js',
    'src/**/*.map'
  ]);
}

function moveNpm() {
  return gulp.src([
    'src/temp/lib/pioneer-tree.d.ts'
    ])
    .pipe(gulp.dest('node_modules/@pioneer-code/pioneer-tree'));
}

gulp.task('move:npm', gulp.series(
  moveNpm
));

gulp.task('clean', gulp.series(
  clean
));

