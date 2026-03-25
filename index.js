// entrypoint file for express App
const express = require('express');
const cors = require('cors');
const app = express();

// router
const moviesRouter = require('./routers/moviesRouter');

// middleware to handle files in public folder and json files
app.use("/static/", express.static("public"));
app.use(express.json());
// custom middlewares imports
const errHandlerMiddleware = require('./middleware/errHandler');
const notFoundMiddleware = require('./middleware/notFound');

app.use(cors({ origin: process.env.FE_URL}))

app.get('/', (req, res) => {
    res.send('Welcome to the book API!');
})

app.use('/api/movies', moviesRouter);

app.use(notFoundMiddleware);
app.use(errHandlerMiddleware);

app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on http://localhost:${process.env.APP_PORT}/`)
})