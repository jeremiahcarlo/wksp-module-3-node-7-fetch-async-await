const request = require('request-promise');

const getDadJoke = async () => {
    const options = {
        uri: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'
        }
    }
    const joke = await request(options);
    const parsedJoke = JSON.parse(joke)
    return parsedJoke.joke 
}

getDadJoke().then(data => console.log(data));



module.exports = { getDadJoke };