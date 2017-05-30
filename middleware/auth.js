var jwt = require('jwt-simple');

exports.ensureAuthenticated = function(req, res, next) {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ message: "Petición no Autorizada" });
    }

    var token = req.headers.authorization.split(" ")[1];
    try {
        var payload = jwt.decode(token, "webapiautocar23");
    } catch (error) {
        return res
            .status(401)
            .send({ message: "El Token ha sido alterado" });
    }
    console.log(payload);
    if (payload.rol == 'admin') {
        console.log('es el admin');
        next();

    } else {
        if (token) {
            try {
                if (payload.exp <= Math.round(new Date().getTime() / 1000)) {
                    return res
                        .status(401)
                        .send({ message: "El token ha expirado" });
                }
                next();
            } catch (err) {
                return res
                    .status(401)
                    .send({ message: "El Token ha sido alterado" });
            }
        }

    }
}