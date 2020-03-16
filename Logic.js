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
let url = 'http://localhost:3000/randomizer';

ButtonConnection.onclick = async () => {
    console.log('ya clicked me')

    let answer =  await fetch(url)
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Completed"), 1000)
    });
    let data =  await myPromise

    answer
    console.log(data)
    
}

// ait fetch(url)
//     .then(response => {
//         let data = await response.json();
//         console.log('Fetch successful', data)
//             // TODO: återkoppla för användaren - säg att ordet har lagts till
//         })
        
// 		.catch(error => {
// 			console.log('Fetch failed.', error)
//         })