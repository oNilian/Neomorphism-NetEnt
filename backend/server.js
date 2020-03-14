const http = require('http');
const fs = require('fs');

fs.readFile('./myFile.txt', (err, data) => {
	if( err ) throw err;  // if reading fails
	console.log(data);  // do something with file contents
});
fs.writeFile('./myFile.txt', 'Text to save in file', () => {
	console.log('Text saved to file.');
});

// module.exports = 