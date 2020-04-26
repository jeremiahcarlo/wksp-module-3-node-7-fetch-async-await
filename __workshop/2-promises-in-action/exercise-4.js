const request = require('request-promise');

const getTronaldDump = async () => {
    const options = {
        uri: 'https://api.tronalddump.io/random/quote',
        headers: {
            'Accept': 'application/json'
        }
    }
    const joke = await request(options);
    const parsedJoke = JSON.parse(joke)
    return parsedJoke.value
}

getTronaldDump().then(data => console.log(data));

module.exports = { getTronaldDump };
