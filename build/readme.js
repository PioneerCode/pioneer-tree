const cpy = require('cpy');
const chalk = require('chalk');

cpy('./README.md', './dist/pcac/')
  .then(() => {
    console.log(chalk.cyan('Pioneer Charts: README.md copied!'));
  });


