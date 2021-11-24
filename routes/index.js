var express = require('express');
var router = express.Router();
const {getProductWithCustomer } = require('../controllers/productController')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
  
router.get('/product',getProductWithCustomer);
  
module.exports = router;
  