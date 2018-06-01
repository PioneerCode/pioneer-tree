/**
 * Move sass assets to lib dist
 */
const copyfiles = require('copyfiles');
const chalk = require('chalk');

copyfiles(['./projects/pcac/src/lib/**/*.scss', './dist/pcac/scss'], { up: 4 }, function () {
  console.log(chalk.cyan('Pioneer Charts: Sass moved!'));
});
