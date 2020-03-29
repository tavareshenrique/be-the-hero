const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('must generate a unique 8-character ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
