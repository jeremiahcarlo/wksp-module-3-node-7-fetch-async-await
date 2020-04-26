const request = require('request-promise');

const getGeekJoke = async () => {
    const options = {
        uri: 'https://geek-jokes.sameerkumar.website/api',
        headers: {
            'Accept': 'application/json'
        }
    }
    const joke = await request(options);
    const parsedJoke = JSON.parse(joke)
    return parsedJoke
}

getGeekJoke().then(data => console.log(data));

module.export = { getGeekJoke };