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

  describe('filter', () => {
    test('Error when no input data', () => {
      expect(() => filter()).toThrow('no input data');
    });

    test('Error when empty or undefined filter', () => {
      const msg = 'Filter must be a non empty string';
      expect(() => filter(sample, '')).toThrow(msg);
      expect(() => filter(sample)).toThrow(msg);
    });

    test('filter data', () => {
      const expected = [
        {
          name: 'Absurdistan',
          people: [
            {
              name: 'Sophie Stiquey',
              animals: [
                {
                  name: 'Cow Kangaroo',
                },
              ],
            },
          ],
        },
      ];
      expect(filter(sample, 'oo')).toEqual(expected);
    });

    test('filter data, empty return', () => {
      expect(filter(sample, 'rx').length).toEqual(0);
    });
  });
});
