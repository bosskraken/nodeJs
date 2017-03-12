//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/product')

//Routes
//Ruta antigua
/*router.get('/products', function(req, res) {
     res.send('<div style="background:red; text-align:center;"> Bienvenido al api rest muahhaah</div>');
});*/

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

//Return ruter
module.exports = router;