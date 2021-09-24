const cli = require('../cli');
const features = require('../features');

jest.mock('../features', () => ({
  count: jest.fn(),
  filter: jest.fn(),
}));

describe('CLI', () => {
  const data = [];

  beforeEach(() => {
    jest.resetModules();
  });

  describe('parseArgs', () => {
    test('parse command line argument', () => {
      const args = ['--test=dummy', '--test2'];
      const expected = { arg: 'dummy', fct: 'test' };
      expect(cli.parseArgs(args)).toEqual(expected);
    });
  });
  describe('handleArgs', () => {
    test('no or empty command line argument', () => {
      expect(() => cli.handleArgs(data)).toThrow('no argument specified');
      expect(() => cli.handleArgs(data, {})).toThrow('no argument specified');
    });

    test('invalid command line argument', () => {
      expect(() => cli.handleArgs(data, ['--invalid'])).toThrow("unkown argument '--invalid'");
    });

    test('call count feature', () => {
      cli.handleArgs(data, ['--count']);
      expect(features.count).toHaveBeenCalled();
    });
    test('call filter feature', () => {
      cli.handleArgs(data, ['--filter=rx']);
      expect(features.count).toHaveBeenCalled();
    });
  });
});
