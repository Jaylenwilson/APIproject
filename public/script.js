//1: set URL as global variable
//2: Build a fetch to get data from api
//3: Pass in that fetch to get data from API
//4:Create display dunction create elements, give them data,
// append them to div in HTML

const baseURL = 'https://v2.jokeapi.dev/joke/Programming?amount=10'

let jokeContainer = document.getElementById('jokeContainer');

async function getJoke() {
    // fetch(baseURL)
    //     .then(res => res.json())
    //     .then(data => jokeDisplay(data))
    //     .catch(err => console.log(err))
    try {
        const response = await fetch(baseURL)
        const json = await response.json()
        jokeDisplay(json)
    } catch (err) {
        console.log(err)
    }
};
let jokeDisplay = (data) => {
    //console.log data to check display
    //console.log(data);
    let joke = data.jokes[0];
    console.log(joke);
    while (jokeContainer.firstChild) {
        jokeContainer.removeChild(jokeContainer.firstChild)
    }
    // Create elements for incoming data
    //joke.forEach(element => {

    if (joke.type === "single") {

        var ptag = document.createElement('p');
        // element.joke = 
        // element.setup + element.delivery
        ptag.innerText = joke.joke
        jokeContainer.append(ptag)

    }
    else if (joke.type === "twopart") {
        var ptag = document.createElement('p');
        ptag.innerText = joke.setup + " " + joke.delivery
        jokeContainer.append(ptag)
    }
    // console.log(element.joke)

    // });


    //joke.forEach(element => console.log(element.setup, element.delivery))
};
