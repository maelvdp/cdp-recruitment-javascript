describe('features', () => {
  const { count, filter } = require('../features');

  let sample;
  beforeEach(() => {
    jest.resetModules();
    delete require.cache[require.resolve('../data/sample.data.js')];
    sample = require('../data/sample.data.js').data;
  });

  describe('count', () => {
    test('Error when no input data', () => {
      expect(() => count()).toThrow('no input data');
    });

    test('count data', () => {
      const expected = 'Debby Scott [1]';
      expect(count(sample)[0].people[0].name).toEqual(expected);
    });
  });


});