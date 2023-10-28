const pool = require('../../config/database');

async function conectarUsuario(data){
    try{
        const result = await pool.query("SELECT cuenta_Contraseña from Cuenta WHERE cuenta_Correo = ?", [data.correo]);
        console.log(result[0]);
        return result;
        
    }
    catch(err){
        console.error("Error");
        throw err;
    }
}
module.exports = conectarUsuario;
