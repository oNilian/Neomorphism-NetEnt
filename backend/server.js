const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

const randomOutcome = x => {


    x = null;
    x = Math.floor(Math.random() * 6 );
    return x

}  

const randomBonus = 'You have won a extra spin!';

app.get('/randomizer', (req, res) => {
 res.json(randomOutcome())
}) 

app.listen(3000)



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
