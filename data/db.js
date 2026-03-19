const mysql = require('mysql2');

// Instantiates db connection
const db = mysql.createConnection(dbConfig);

const dbConfig = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME
}

// Connects to db
db.connect(err => {
    if (err) {throw err;}

    console.log('Connected to database');
});

module.exports = db;