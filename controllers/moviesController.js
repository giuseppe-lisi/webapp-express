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
    const sqlQuery = 'SELECT * FROM movies WHERE id = ?'
    

    db.query(sqlQuery, [id], (err, results) => {
        if (err) return res.status(500).json({ err: 'DB query error', message: err.message });
        res.json(results);
    })
}

module.exports = { index, show }