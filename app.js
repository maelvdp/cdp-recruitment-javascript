const cli = require('./cli');
const { data } = require('./data/data');

const main = () => {
  try {
    cli.handleArgs(data, process.argv.slice(2));
    process.exit(0);
  } catch (e) {
    console.error(e.message);
    cli.usage();
    process.exit(1);
  }
};

main();