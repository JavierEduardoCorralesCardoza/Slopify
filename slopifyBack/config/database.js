const mysql = require('mysql2/promise');

const con = mysql.createPool({
    host: "db-slopify.ctp5br8ytsmn.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "CocacolA2016",
    database: "Sloopify_DB"
});

module.exports = con;