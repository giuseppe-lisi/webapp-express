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
    const sqlQueryBook = 'SELECT * FROM movies WHERE id = ?'
    const sqlQueryReviews = 'SELECT * FROM reviews WHERE movie_id = ?'

    db.query(sqlQueryBook, [id], (err, books) => {
        if (err) return res.status(500).json({ err: 'DB query error', message: err.message });
        if (books.lenght === 0) {return res.status(404).json({ message: 'Could not find that book' })};

        db.query(sqlQueryReviews, [id], (err, reviews) => {
            if (err) return res.status(500).json({ err: 'DB query error', message: err.message });

            books[0].reviews = reviews;
            return res.json(books);
        })
    })
}

module.exports = { index, show }