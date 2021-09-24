const count = (data) => {
  if (!data || typeof (data) !== 'object') {
    throw new Error('no input data');
  }
  return data.map((c) => {
    c.name = `${c.name} [${c.people.length}]`;
    c.people = c.people.map((p) => {
      p.name = `${p.name} [${p.animals.length}]`;
      return p;
    });
    return c;
  });
};

module.exports = {
  count
};
