// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async() => {
    try {
        const iss_position = await request('http://api.open-notify.org/iss-now.json');
        const parsedPosition = JSON.parse(iss_position)
        const parsedData = {
            lat: parsedPosition.iss_position.latitude,
            lng: parsedPosition.iss_position.longitude,
        }
        console.log(parsedData); 
        return(parsedData); 
} catch(err) {console.log(err);}
};

getIssPosition();
