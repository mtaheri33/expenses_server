// This sets up the server.

const cors = require('cors');
const express = require('express');

// These are settings for the server.
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Expenses Server'));

// These are routers that handle different resources.
const signInRouter = require('./routes/signIn')
app.use('/signIn', signInRouter);

// This runs when an unknown route and HTTP method combination is
// received.
app.use((req, res) => {
  const message = (
    `There is no route ${req.url} that supports a ${req.method} request.`
  );
  res.status(404).send(message);
});

app.listen(3000, () => { });

module.exports = app;
