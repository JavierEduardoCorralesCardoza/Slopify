const express = require("express");
const con = require("../config/database.js")

// Define rutas y manejo de rutas aquí

con.connect(function(err){
    if (err) throw err;

    const sql = "INSERT INTO Cuenta(cuenta_Correo) VALUES ('hello@gmail.com')"
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Resultado: " + result);
    })
})

