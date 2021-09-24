const filter = (data, str) => {
  if (!data || typeof (data) !== 'object') {
    throw new Error('no input data');
  }
  if (!str || typeof (str) !== 'string') {
    throw new Error('Filter must be a non empty string');
  }

  data = data.filter((c) => {
    c.people = c.people.filter((p) => {
      p.animals = p.animals.filter((a) => a.name.includes(str));
      if (p.animals.length > 0) {
        return p;
      }
    });
    if (c.people.length > 0) {
      return c;
    }
  });
  return data.length ? data : undefined;
};

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
  count,
  filter,
};
