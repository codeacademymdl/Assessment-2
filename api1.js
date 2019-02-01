const https = require('https');

// const apiList = [];
//
const getRequest = () => {
  const promise = new Promise((resolve, reject) => {
    const apiURL = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    return https.get(apiURL, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    });
  });
  return promise;
};


// const booksJson = getRequest().then(data => JSON.parse(data));


module.exports = getRequest;
