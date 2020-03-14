const http = require('http');
const fs = require('fs');


// The server should have the following feature:
// • Receive request from client and return a randomized outcome
// • The outcome should be three random integers between 0-5
// • Support Bonus feature

const randomOutcome = x => {

    x = null;
    x = Math.floor(Math.random() * 6 );
    return x

}  

const randomBonus = 'You have won a extra spin!';

// Win type
// • Three types of win types: No Win, Small Win and Big Win
// • Two equal integers constitute a Small Win
// • Three equal integers constitute a Big Win
// • Any other outcome constitutes a No Win

// Bonus feature
// • The Bonus rewards the player with a free request
// • The server should randomly return whether the feature is triggered or not along with
// the regular response
// • The client should present the regular result returned, then if the feature is triggered,
// perform a new request without any user input


const server = http.createServer((req, res) => {
    if (req.url === '/') {
         res.send(randomOutcome())
         res.end();
         console.log('New connection...')
    }
    
 });

server.on('connection', (socket) => {
        console.log('New connection...')
   })

server.listen(3000)

console.log('Listening to port 3000...')








// fs.readFile('./myFile.txt', (err, data) => {
// 	if( err ) throw err;  // if reading fails
// 	console.log(data);  // do something with file contents
// });
// fs.writeFile('./myFile.txt', 'Text to save in file', () => {
// 	console.log('Text saved to file.');
// });

// module.exports = 