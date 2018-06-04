const cpy = require('cpy');
const chalk = require('chalk');

cpy('./README.md', './dist/pctree/')
  .then(() => {
    console.log(chalk.cyan('Pioneer Tree: README.md copied!'));
  });


