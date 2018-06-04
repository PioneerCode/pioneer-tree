/**
 * Move sass assets to lib dist
 */
const copyfiles = require('copyfiles');
const chalk = require('chalk');

copyfiles(['./projects/pctree/src/pioneer-tree.scss', './dist/pctree/scss'], { up: 3 }, function () {
  console.log(chalk.cyan('Pioneer Tree: Sass moved!'));
});
