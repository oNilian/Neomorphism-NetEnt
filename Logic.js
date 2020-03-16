document.addEventListener("DOMContentLoaded", function() {
    console.log('JsFile Loaded')
});
    
// The client should have the following features:
// • Perform an outcome request to the server
// • Display the result returned by the server using the provided graphical resources
// • Display the Win type
// • Support the Bonus feature

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

let ButtonConnection = document.querySelector(".serverReq")
let result = document.querySelector(".logicWrap")
let resultMessage = document.querySelector(".resultMessage")

let url = 'http://localhost:3000/randomizer';
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => resolve('worked'), 1000)
});

    ButtonConnection.onclick = () => {

        async function apiGetAll () {
            try {
                let resp = await fetch(url)
                const data = await resp.text()

                console.log(data)

                if(data.length < 10) {
                    result.innerHTML = `
                        <div class="result">${data[0]}</div>
                        <div class="result">${data[2]}</div>
                        <div class="result">${data[4]}</div>
                        `
                    /// First comparison is to check if all 3 are the same, then we check if 2 of the windows are the same
                    if(data[0] === data[2] && data[2] === data[4]){
                        resultMessage.innerHTML = `<div>Big Win</div>`
                        
                    } else if (
                        data[2] === data[4] || 
                        data[2] === data[0] || 
                        data[0] === data[4]
                    ){
                        resultMessage.innerHTML = `<div>Small Win</div>`
                        
                    }

                    
                    } else {
                        resultMessage.innerHTML = `<div>No Win</div>`
                        result.innerHTML = `
                        <div class="result">${data[23]}</div>
                        <div class="result">${data[25]}</div>
                        <div class="result">${data[27]}</div>
                        `
                        alert('You won a extra spinn')  
                }

            } catch (err) {
                console.log(err)
            }
        }
        apiGetAll()
    }