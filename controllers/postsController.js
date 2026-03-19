const db = require('../data/db');

function index(req, res) {
    const sqlQuery = 'SELECT * FROM posts'
    db.query(sqlQuery, (err, results) => {
        if (err) return res.status(500).json({ err: 'DB query error', message: err.message });

        res.json(results);
    })
}

function show(req, res) {

}

module.exports = { index, show }