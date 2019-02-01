
// Import MySQL
const mysql = require('mysql');

// Configure connection using JAWSDB
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        database: 'burgers_db',
        user: 'root',
        password: 'turkey@13',
    });
}
// Set connection
connection.connect((err) => {
    if (err) throw err;
    console.log('Connection established at: ' + connection.threadId);
});

module.exports = connection;