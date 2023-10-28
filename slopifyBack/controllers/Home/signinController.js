const conectarUsuario = require('../../models/Home/signinModel');

async function signinController(req, res) {
    try{
        data = {
            correo: "prueba@gmail.com",
            contrasena: "1234"
        };

        respuesta = await conectarUsuario(data);

        res.json({
            status: 'success',
            result: respuesta[0]
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