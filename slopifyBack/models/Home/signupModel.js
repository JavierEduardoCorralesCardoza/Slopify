const pool = require('../../config/database');
async function agregarUsuario(data){
    try{
        const result = await pool.query("INSERT INTO Cuenta (cuenta_Correo, cuenta_Nombre, cuenta_Contraseña) SELECT ?, ?, ? WHERE NOT EXISTS (SELECT cuenta_Correo FROM Cuenta WHERE cuenta_Correo = ?);", [data.correo, data.nombre, data.contrasena, data.correo]);
        console.log(result[0])
        return result[0]['info'];
    }
    catch(err){
        console.error("Erroooooor")
        throw err;
    }
}

module.exports = agregarUsuario;