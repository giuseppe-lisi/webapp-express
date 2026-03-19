const mysql = require('mysql2');

const dbConfig = {
    host: 'locahost',
    port: 3000,
    user: 'root',
    pass: 'root',
    database: 'movies_db'
};

// Instantiates db connection
const db = mysql.createConnection(dbConfig);

// Connects to db
db.connect(err => {
    if (err) {throw err;}

    console.log('Connected to database');
});

module.exports = db;