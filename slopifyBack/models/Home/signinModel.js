const pool = require('../../config/database');
function conectarUsuario(data) {
    return new Promise((resolve, reject) => {
        pool.query("SELECT cuenta_Contraseña from Cuenta WHERE cuenta_Correo = ?", [data.correo], (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(result[0]['cuenta_Contraseña']);
                resolve(result[0]['cuenta_Contraseña']);
            }
        });
    });
}
module.exports = conectarUsuario;
