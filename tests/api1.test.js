const api1 = require('../api1');

describe('getRequest', () => {
  it('should return a promise and checks if string is received ', async () => {
    const callback = (data) => {
      expect(typeof data).toEqual(typeof '');
    };

    await api1.getRequest().then(callback);
  });
});

describe('getRating', () => {
  it('should return promise and checks if string is received', async () => {
    const callback = (data) => {
      expect(typeof data).toEqual(typeof '');
    };
    await api1.getRating().then(callback);
  });
});
