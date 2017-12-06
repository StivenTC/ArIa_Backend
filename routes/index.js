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
router.post('/user/signup', route.user.signup);

router.get('/user/getUsers', route.user.getUsers);


router.post('/user/addCategories', route.category.AddCategory);
router.get('/user/getCategories', route.category.getCategories);

router.post('/tag/add', route.tag.add);
router.get('/tag/get', route.tag.get);


//router.post('/predial', auth.ensureAuthenticated, route.predial.savePredial);