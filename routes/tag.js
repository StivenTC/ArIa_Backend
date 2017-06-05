exports.add = function(req, res) {
    req.getConnection(function(err, connection) {
        connection.query("CALL PR_ADDTAG('" + req.body.name + "', '" + req.body.color + "' , '" + req.body.fk_user + "')",
            function(err, data) {
                if (err) {
                    console.log("Error Consultando : %s ", err);
                    return res.status(503).send({ status: 503, message: 'error de conexión con la base de datos' });
                } else {
                    return res.status(200).send({ status: "success" });
                }
            });
    });
}

exports.get = function(req, res) {
    req.getConnection(function(err, connection) {
        connection.query("CALL PR_GETTAG('" + req.query.id + "')",
            function(err, data) {
                if (err) {
                    console.log("Error Consultando : %s ", err);
                    return res.status(503).send({ status: 503, message: 'error de conexión con la base de datos' });
                } else {
                    return res.status(200).send(data[0]);
                }
            });
    });
}