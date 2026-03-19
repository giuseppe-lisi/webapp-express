const mysql = require("mysql2");

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
};

// Instantiates db connection
const db = mysql.createConnection(dbConfig);

// Connects to db
db.connect((err) => {
    if (err) {throw err;}

    console.log("Connected to database");
});

module.exports = db;
