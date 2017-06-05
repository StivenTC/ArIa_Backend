//get
exports.getCategories = function(req, res) {
    req.getConnection(function(err, connection) {
        //        connection.query("select * from users",
        connection.query("CALL PR_GETCATEGORIES(" + req.query.user + ")",
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

exports.AddCategory = function(req, res) {
    //res.json(req.body);
    req.getConnection(function(err, connection) {
        //connection.query("select * from users",
        connection.query("CALL PR_ADDCATEGORY('" + req.body.varCat + "', '" + req.body.varUsr + "')",
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