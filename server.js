'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 9001;

const getDadJoke = require('./__workshop/2-promises-in-action/exercise-3');
const getGeekJoke = require('./__workshop/2-promises-in-action/exercise-4');
const getTronaldJoke = require('./__workshop/2-promises-in-action/exercise-5');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app;
app.set('view engine', 'ejs');

// endpoints
app.post('/make-me-laugh', async (req, res) => {
  try {
    switch (req.body.type) {
      case 'dad':
        const response = await getDadJoke();
        res.send({ joke: response.joke });
        break;
      case 'geek':
        res.send({ joke: await getGeekJoke() });
        break;
      case 'tronald':
        res.send({ joke: await getTronaldJoke() });
        break;
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));