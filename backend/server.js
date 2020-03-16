// const express = require('express');
// const app = express();
const app = require('http');
const port = 3000;

const randomOutcome = () => {

    randPic = [
        {First: '1', }
]
    //rensa alla värdern för varje spin
    x = null;
    y = [];
    bonus = null;

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
    
    let url = "http://localhost:3000/randomizer";
    url = req.url

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        /** add other headers as per requirement */
      };
    
      if (url) {
        res.writeHead(200,headers)
        res.write(`${randomOutcome()}`)
        res.end()
      }

      // 
    }).listen(port);