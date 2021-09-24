const features = require('./features');

const prettyPrint = (data) => {
    console.log(JSON.stringify(data, undefined, 2));
};

const parseArgs = (cmdlineArgs) => {
  if (cmdlineArgs && cmdlineArgs[0]) {
    const arg = cmdlineArgs[0]; // just one arg handled for now
    const regexp = /--([a-z]+)(=([a-z]+))?/;
    const match = arg.match(regexp);
    if (match) {
      return { fct: match[1], arg: match[3] };
    }
  }
  throw new Error('no argument specified');
};

const handleArgs = (data, cmdlineArgs) => {
  const params = parseArgs(cmdlineArgs);
  switch (params.fct) {
    case 'filter':
      data = features.filter(data, params.arg);
      break;
    case 'count':
      data = features.count(data);
      break;
    default:
      throw new Error(`unkown argument '--${params.fct}'`);
  }
  prettyPrint(data);
};

const usage = () => {
  console.info('Usage: ');
  console.info('--filter=ry : Only animals containing `ry` are displayed');
  console.info('--count : print the counts of People and Animals by counting the number of children and appending it in the name');
};

module.exports = {
  handleArgs,
  parseArgs,
  prettyPrint,
  usage,
};
