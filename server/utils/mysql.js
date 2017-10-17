const mysql = require('mysql');
const config = require('../../config/index');

const connection = mysql.createConnection({
    host: config.server.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.dbname,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to DB!');
});

module.exports = connection;
