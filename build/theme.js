/**
 * Build pre-built theme
 */
const sass = require('node-sass');
const fs = require('fs');
const outputDirectory = './dist/pctree/themes';
const chalk = require('chalk');

sass.render({
  file: './projects/pctree/src/pioneer-tree.scss',
  sourceMap: true,
  outFile: 'pioneer-tree.css'
}, function (error, result) {
  if (fs.existsSync(outputDirectory)) {
    writeFile(result.css.toString(), outputDirectory + "/pioneer-tree.css");
    writeFile(result.map.toString(), outputDirectory + "/pioneer-tree.css.map");
  } else {
    return fs.mkdir(outputDirectory, function (error) {
      writeFile(result.css.toString(), outputDirectory + "/pioneer-tree.css");
      writeFile(result.map.toString(), outputDirectory + "/pioneer-tree.css.map");
    });
  }
});

sass.render({
  file: './projects/pctree/src/pioneer-tree.scss',
  sourceMap: true,
  outFile: 'pioneer-tree.min.css',
  outputStyle: 'compressed'
}, function (error, result) {
  if (fs.existsSync(outputDirectory)) {
    writeFile(result.css.toString(), outputDirectory + "/pioneer-tree.min.css");
    writeFile(result.map.toString(), outputDirectory + "/pioneer-tree.min.css.map");
  } else {
    return fs.mkdir(outputDirectory, function (error) {
      writeFile(result.css.toString(), outputDirectory + "/pioneer-tree.min.css");
      writeFile(result.map.toString(), outputDirectory + "/pioneer-tree.min.css.map");
    });
  }
});

function writeFile(data, dir) {
  return fs.writeFile(dir, data, function (err) {
    console.log(chalk.cyan('Pioneer Tree: ' + dir + ' theme was saved!'));
  });
}
