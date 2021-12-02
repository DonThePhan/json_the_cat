let breed = process.argv[2];
const request = require('request');

let response = request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
  // if no ERRORS
  if (!err) {
    let result = JSON.parse(body)
    
    // if results EMPTY
    if (result.length === 0) {
      console.log('breed not found');
      // if results found
    } else {
      console.log(result[0].description);
    }
    // if ERROR
  } else {
    console.log(err);
  }
});
