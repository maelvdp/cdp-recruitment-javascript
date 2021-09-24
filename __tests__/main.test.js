const app = require('../app');
const cli = require('../cli');

jest.mock('../cli', () => ({
  prettyPrint: jest.fn(),
  handleArgs: jest.fn(() => {
    throw new Error();
  }),
  usage: jest.fn(),
}));

describe('app', () => {
  describe('main', () => {
    test('show usage on error', () => {
      const mockExit = jest.spyOn(process, 'exit').mockImplementation();
      const mockConsoleError = jest.spyOn(console, 'error').mockImplementation();
      app.main();
      expect(cli.usage).toHaveBeenCalled();
      expect(mockExit).toHaveBeenCalledWith(1);
      expect(mockConsoleError).toHaveBeenCalled();
      mockConsoleError.mockRestore();
      mockExit.mockRestore();
    });
  });
});
