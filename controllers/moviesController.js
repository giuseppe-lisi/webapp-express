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
    const sqlQueryMovie = 'SELECT * FROM movies WHERE id = ?';
    const sqlQueryReviews = 'SELECT * FROM reviews WHERE movie_id = ?';
    const sqlQueryReviewsAvg = `
        SELECT TRUNCATE(AVG(vote), 2) as vote
        FROM movies
        JOIN reviews
        ON reviews.movie_id = movies.id
        WHERE movies.id = ?`;

    db.query(sqlQueryMovie, [id], (err, movies) => {
        if (err) return res.status(500).json({ err: 'DB query error', message: err.message });
        if (movies.lenght === 0 || movies[0].id === null) {return res.status(404).json({ message: 'Could not find that movie' })};

        const movie = movies[0]; 

        db.query(sqlQueryReviews, [id], (err, reviews) => {
            if (err) return res.status(500).json({ err: 'DB query error', message: err.message });

            movie.reviews = reviews;

            db.query(sqlQueryReviewsAvg, [id], (err, reviewAvg) => {
                if (err) return res.status(500).json({ err: 'Unable to fetch reviews AVG', message: err.message });
                
                movie.avg = reviewAvg[0].vote

                return res.json(movie)
            })
        })
    })
}

module.exports = { index, show }