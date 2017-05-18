/**
 * Created by lu1 on 2017/5/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    specification:  {
        color: String,
        type: String,
        spec1: String,
        spec2: String,
        spec3: String,
        spec4: String
    },
    price: Number,
    shoppingCost: Number
});

module.exports = mongoose.model('Product', productSchema);

