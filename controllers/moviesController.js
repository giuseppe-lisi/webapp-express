const db = require('../data/db');

function index(req, res) {
    const sqlQuery = 'SELECT * FROM movies'
    db.query(sqlQuery, (err, results) => {
        if (err) return res.status(500).json({ err: 'DB query error', message: err.message });

        res.json(results);
    })
}

function show(req, res) {
    const id = req.params.id;
    const sqlQueryMovie = 'SELECT * FROM movies WHERE id = ?'
    const sqlQueryReviews = 'SELECT * FROM reviews WHERE movie_id = ?'

    db.query(sqlQueryMovie, [id], (err, movies) => {
        if (err) return res.status(500).json({ err: 'DB query error', message: err.message });
        if (movies.lenght === 0 || movies[0].id === null) {return res.status(404).json({ message: 'Could not find that movie' })};

        const movie = movies[0]; 

        db.query(sqlQueryReviews, [id], (err, reviews) => {
            if (err) return res.status(500).json({ err: 'DB query error', message: err.message });

            movie.reviews = reviews;
            return res.json(movie);
        })
    })
}

module.exports = { index, show }