const getRequest = require('../api1');

describe('getRequest', () => {
  it('should return a string', async () => {
    const callback = (data) => {
      expect(typeof data).toEqual(typeof '');
    };

    await getRequest().then(callback);
  });

//   it('should not return empty string ', (done) => {
//     function callbackFunction(data) {
//       expect(data).not.toEqual('');
//       done();
//     }
//     process.argv = ['node', 'http_client.js', 'http://localhost:3002'];
//     getRequest(callbackFunction);
//   });
});
