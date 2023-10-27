const agregarUsuario = require('../models/model');
const modelo = require('../models/model');

function signupController(req, res) {
    try{
        data = {
            correo: "prueba@gmail.com",
            nombre: "fulanito de tal",
            contrasena: "1234"
        };

        respuesta = agregarUsuario(data);

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