const https = require('https');

// promise.race
const ratingID = [];
const getRequest = () => {
  const promise = new Promise((resolve, reject) => {
    const apiURL = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';
    return https.get(apiURL, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
    });
  });
  return promise;
};

const getRating = (bookID) => {
  const promise = new Promise((resolve, reject) => {
    const apiURL = `https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/${bookID}`;
    return https.get(apiURL, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
    });
  });
  return promise;
};

const booksResponse = [];

const booksJson = getRequest().then((data) => {
  const books = JSON.parse(data).books;
  booksResponse.push(books);
  for (let i = 0; i < books.length; i += 1) {
    ratingID.push(books[i].id);
  }
  if (ratingID.length > 0) { return ratingID; }
}).then((ratingID) => {
  const promiseIDRatingRequest = [];
  ratingID.forEach((value) => {
    promiseIDRatingRequest.push(getRating(value));
  });
  const multiplePromiseCalls = async () => {
    const result = await Promise.all(promiseIDRatingRequest);
    return result;
  };
  return multiplePromiseCalls();
}).then((ratingList) => {
  // console.log(booksResponse);
  const booksJsonObject = booksResponse[0];
  // console.log(JSON.parse(ratingList[0]));
  ratingList.forEach((value, index) => {
    booksJsonObject[index].rating = (JSON.parse(value).rating);
  });
  console.log(booksJsonObject);
});


module.exports = { getRequest, getRating };
