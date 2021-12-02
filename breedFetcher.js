const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    // if no ERRORS
    if (!err) {
      let result = JSON.parse(body);

      // if results EMPTY
      if (result.length === 0) {
        return callback('error: invalid/non-existent breed', null);
        // if results found
      } else {
        return callback(err, result[0].description);
      }
      // if ERROR
    } else {
      return callback(err, 'something went wrong');
    }
  });
};

module.exports = { fetchBreedDescription };
