// const express = require('express');
// const app = express();
const app = require('http');
const fs = require('fs');


const randomOutcome = () => {

    //rensa alla värdern för varje spin
    let x = null;
    let y = [];
    let bonus = null;

    //Bonus-Jackpot, 1000 möjligheter
    bonus = Math.floor(Math.random() * 1000 );
    console.log(bonus);

    
    //Loop som spottar tillbaka 3 randomized värden i en lista
    for(i=0; i<3; i++) {
        
        x = Math.floor(Math.random() * 6 );
        y.push(x)
        
        console.log(y)
    }

    //Om din dolda roll är över 950 av 1000 så får du en extra spin
    //Om din dolda roll är under 950 eller under så fortsätter allt som vanligt
    if (bonus > 950) {
        console.log('o my lord you won a hidden bonus!',bonus)
        return `You hit a hidden bonus ${y}`
    } else {
        return y
    }
}  

//middleware
app.createServer((req, res) => {
    
    // app.use((request, response,  next) => {
        // 	console.log('Logger:', request.url, request.method);
        //     response.header("Access-Control-Allow-Origin", "*")
        // 	next();
        // })
        
    let url = req.url

    if(url ==='/randomizer'){
        res.write(`${randomOutcome()}`); //write a response
        res.end(); //end the response
    }else{
        res.write('<h1>Hello World!<h1>'); //write a response
        res.end(); //end the response
    }
    }).listen(3000, function(){
        console.log("server start at port 3000"); //the server object listens on port 3000
    });

//Endpoint för all data för att senare kunna presentera i client-side
// app.get('/randomizer', (req, res) => {
//  res.json(randomOutcome())
// }) 

// app.listen(3000)



// The server should have the following feature:
// • Receive request from client and return a randomized outcome
// • The outcome should be three random integers between 0-5
// • Support Bonus feature

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
