//Dependencies
var express = require('express');
var router = express.Router();

//Routes
router.get('/products', function(req, res) {
    res.send('<div style="background:red;"> Bienvenido al api rest muahhaah</div>');
});

//Return ruter
module.exports = router;