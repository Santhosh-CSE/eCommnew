const mongoose = require('mongoose');
cartSchema = mongoose.Schema({
productid: {
type: Array,
required: true
}
});
module.exports = mongoose.model('Cart', cartSchema);