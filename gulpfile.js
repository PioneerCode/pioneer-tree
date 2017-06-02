var gulp = require('gulp');
var del = require('del');

function clean() {
  return del([
    'temp/**',
    'dist/**',
    'bundles/**',
    'src/**/*.d.ts',
    'node_modules/@pioneer-code/**'
  ]);
}

gulp.task('default', gulp.series(
  clean
));

gulp.task('clean', gulp.series(
  clean
));

