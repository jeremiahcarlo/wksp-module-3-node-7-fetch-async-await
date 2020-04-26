const { getDadJoke } = require('./__workshop/2-promises-in-action/exercise-3');
const { getTronaldDump } = require('./__workshop/2-promises-in-action/exercise-4');
const { getGeekJoke } = require('./__workshop/2-promises-in-action/exercise-5');

const handleJoke = async (req, res) => {
    const { type } = req.body;
    let joke = '';
    switch (type) {
        case 'geek':
            joke = await getGeekJoke();
            break;
        case 'tronald':
            joke = await getTronaldDump();
            break;
        case 'dad':
        default:
            joke = (await getDadJoke()).joke;
            break;
    }

    res.status(200).json({data: joke});
}

module.exports = { handleJoke }