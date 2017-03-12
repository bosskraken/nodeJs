//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

//Model exports
module.exports = restful.model('Products', productSchema);