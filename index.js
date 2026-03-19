// entrypoint file for express App
const express = require('express');
const app = express();

// middleware to handle files in public folder and json files
app.use(express.static("public"));
app.use(express.json());
// custom middlewares imports
const errHandlerMiddleware = require('./middleware/errHandler');
const notFoundMiddleware = require('./middleware/notFound');

app.get('/', (req, res) => {
    res.send('Welcome to the book API!');
})

app.use(notFoundMiddleware);
app.use(errHandlerMiddleware);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on http://localhost:${process.env.APP_PORT}/`)
})