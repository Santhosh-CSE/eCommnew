const mongoose = require('mongoose');
productschema = mongoose.Schema({
productname: {
type: String,
required: true
},
price: {
type: Number,
required: true,
default:10000
}
});
module.exports = mongoose.model('productschema', productschema)