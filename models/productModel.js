const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: { type: String, require: true },
    status: { type: Boolean, default: true },
    favoriteCustomers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customers', default: [] }],

})
module.exports = mongoose.model('Products', productSchema)