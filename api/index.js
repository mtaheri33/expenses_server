// This sets up the server.

const cors = require('cors');
const express = require('express');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Expenses Server'));

const signInRouter = require('./routes/signIn')
app.use('/signin', signInRouter);
const signUpRouter = require('./routes/signUp')
app.use('/signup', signUpRouter);

app.use((req, res) => {
  const message = `There is no route ${req.url} that supports a ${req.method} request.`;
  res.status(404).send(message);
});

app.use((err, req, res, next) => res.status(500).send('Sorry, an error occurred.'));

app.listen(3000, () => { });

module.exports = app;
