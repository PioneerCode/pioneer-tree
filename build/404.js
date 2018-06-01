const cpy = require('cpy');
const chalk = require('chalk');

cpy('./dist/pioneer-tree/index.html', './dist/pioneer-tree/', {
  rename: basename => `404.html`
}).then((error, r) => {
  console.log(error);
  console.log(chalk.cyan('Pioneer Tree: 404 copied!'));
});


