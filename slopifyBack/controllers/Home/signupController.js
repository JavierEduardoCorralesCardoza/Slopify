const agregarUsuario = require('../../models/Home/signupModel');

async function signupController(req, res) {
    try{
        data = {
            correo: "mysql2@gmail.com",
            nombre: "siu",
            contrasena: "1234"
        };

        respuesta = await agregarUsuario(data);

        res.json({
            status: 'success',
            result: respuesta
        })
    }
    catch(err){
        res.json({
            status: 'error',
            error: err.message
        });
    }
}

module.exports = signupController;