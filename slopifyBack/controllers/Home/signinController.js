const conectarUsuario = require('../../models/Home/signinModel');

function signinController(req, res) {
    try{
        data = {
            correo: "prueba@gmail.com",
            contrasena: "1234"
        };

        conectarUsuario(data).then(password => {
            console.log('Contraseña:', password);
            res.json({
                status: 'success',
                result: password
            })
        })
        .catch(error => {
            console.error('Error:', error);
        });

        
    }
    catch(err){
        res.json({
            status: 'error',
            error: err.message
        });
    }
}

module.exports = signinController;