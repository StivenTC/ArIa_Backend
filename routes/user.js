//post
exports.login = function(req, res) {
        res.json(req.body.user);
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
                    return res.send(401, userQuery);
                }
            });
    });
}