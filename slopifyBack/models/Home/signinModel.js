const pool = require('../../config/database');

async function conectarUsuario(data){
    try{
        const result = await pool.query("SELECT cuenta_Contraseña from Cuenta WHERE cuenta_Correo = ?", [data.correo]);
        console.log(result[0][0].cuenta_Contraseña);
        return result[0][0].cuenta_Contraseña;
        
    }
    catch(err){
        console.error("Error");
        throw err;
    }
}
module.exports = conectarUsuario;
