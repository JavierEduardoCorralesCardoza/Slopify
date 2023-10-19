const express = require("express");
var mysql = require('mysql');
const cors = require("cors");
const app = express()

var con = mysql.createConnection({
  host: "db-slopify.ctp5br8ytsmn.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "CocacolA2016",
  database: "Sloopify_DB"
});

con.connect(function(err){
    if (err) throw err;

    const sql = "INSERT INTO Cuenta(cuenta_Correo) VALUES ('hola@gmail.com')"
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Resultado: " + result);
    })
})