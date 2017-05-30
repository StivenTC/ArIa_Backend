module.exports = router;

/* Cargador dinámico de Modelos */
var route = {}
routes_path = process.cwd() + '/routes'
fs.readdirSync(routes_path).forEach(function(file) {
    if (file.indexOf('.js') != -1) {
        route[file.split('.')[0]] = require(routes_path + '/' + file)
    }
})

router.post('/user/login', route.user.login);
router.get('/user/test', auth.ensureAuthenticated, route.user.test);

//router.post('/predial', auth.ensureAuthenticated, route.predial.savePredial);