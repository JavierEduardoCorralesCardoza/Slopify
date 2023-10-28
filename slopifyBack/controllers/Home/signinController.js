const conectarUsuario = require('../../models/Home/signinModel');

function signinController(req, res) {
    try{
        data = {
            correo: "prueba@gmail.com",
            contrasena: "1234"
        };

        respuesta = conectarUsuario(data);

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

module.exports = signinController;