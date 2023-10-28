const pool = require('../../config/database');
async function agregarUsuario(data){
    try{
        const result = await pool.query("INSERT INTO Cuenta (cuenta_Correo, cuenta_Nombre, cuenta_Contraseña) VALUES (?, ?, ?)", [data.correo, data.nombre, data.contrasena]);
        return result;
    }
    catch(err){
        console.error("Erroooooor")
        throw err;
    }
}

module.exports = agregarUsuario;