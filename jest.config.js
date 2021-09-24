module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '*.{js,jsx}',
    '!.*.js',
    '!**/node_modules/**',
    '!*.config.js',
    '!data/**',
  ],
};
