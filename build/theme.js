/**
 * Build pre-built theme
 */
const sass = require('node-sass');
const fs = require('fs');
const outputDirectory = './dist/pcac/themes';
const chalk = require('chalk');

sass.render({
  file: './projects/pcac/src/lib/pcac.scss',
  sourceMap: true,
  outFile: 'pcac.css'
}, function (error, result) {
  if (fs.existsSync(outputDirectory)) {
    writeFile(result.css.toString(), outputDirectory + "/pcac.css");
    writeFile(result.map.toString(), outputDirectory + "/pcac.css.map");
  } else {
    return fs.mkdir(outputDirectory, function (error) {
      writeFile(result.css.toString(), outputDirectory + "/pcac.css");
      writeFile(result.map.toString(), outputDirectory + "/pcac.css.map");
    });
  }
});

sass.render({
  file: './projects/pcac/src/lib/pcac.scss',
  sourceMap: true,
  outFile: 'pcac.min.css',
  outputStyle: 'compressed'
}, function (error, result) {
  if (fs.existsSync(outputDirectory)) {
    writeFile(result.css.toString(), outputDirectory + "/pcac.min.css");
    writeFile(result.map.toString(), outputDirectory + "/pcac.min.css.map");
  } else {
    return fs.mkdir(outputDirectory, function (error) {
      writeFile(result.css.toString(), outputDirectory + "/pcac.min.css");
      writeFile(result.map.toString(), outputDirectory + "/pcac.min.css.map");
    });
  }
});

function writeFile(data, dir) {
  return fs.writeFile(dir, data, function (err) {
    console.log(chalk.cyan('Pioneer Charts: ' + dir + ' theme was saved!'));
  });
}
