//post
exports.signup = function(req, res) {
        //res.json(req.body);
        req.getConnection(function(err, connection) {
            //connection.query("select * from user",
            connection.query("CALL PR_ADDUSER('" + req.body.name + "', '" + req.body.lastname + "', '" + req.body.email + "', '" + req.body.password + "')",
                function(err, userQuery) {
                    console.log(userQuery);
                    if (err) {
                        console.log("Error Consultando : %s ", err);
                        return res.status(503).send({ status: 503, message: 'error de conexión con la base de datos' });
                    } else {
                        return res.status(200).send({ status: "success" });
                    }
                });
        });
    }
    //get
exports.getUsers = function(req, res) {
    req.getConnection(function(err, connection) {
        //        connection.query("select * from users",
        connection.query("select * from jugador",
            function(err, userQuery) {
                console.log(userQuery);
                if (err) {
                    console.log("Error Consultando : %s ", err);
                    return res.status(503).send({ status: 503, message: 'error de conexión con la base de datos' });
                } else {
                    console.log(userQuery);
                    return res.status(200).send(userQuery);
                }
            });
    });
}

exports.login = function(req, res) {
        //res.json(req.body);
        req.getConnection(function(err, connection) {
            //connection.query("select * from users",
            connection.query("CALL PR_LOGIN('" + req.body.email + "', '" + req.body.password + "')",
                function(err, userQuery) {
                    if (err) {
                        console.log("Error Consultando : %s ", err);
                        return res.status(503).send({ status: 503, message: 'error de conexión con la base de datos' });
                    } else {
                        if (userQuery[0][0].STATUS == 'OK') {
                            return res.status(200).send({ status: 'success' });
                        } else {
                            return res.status(400).send({ status: 'error', description: 'El usuario no existe' });
                        }
                    }
                });
        });
    }
    //get
exports.test = function(req, res) {
    //res.json(req.query);
    req.getConnection(function(err, connection) {
        //        connection.query("select * from users",
        connection.query("CALL PR_ADDUSER('Yeison', 'Gomez', 'yeigomez@email.com', '123456')",
            function(err, userQuery) {
                if (err) {
                    console.log("Error Consultando : %s ", err);
                    return res.status(503).send({ status: 503, message: 'error de conexion con la base de datos' });
                } else {
                    return res.status(401).send(userQuery);
                }
            });
    });
}