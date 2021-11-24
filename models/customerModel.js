const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    customerName: { type: String, require: true },
    customerEmail: { type: String, require: true },
    customerMobileNo: { type: String, require: true }
});
module.exports = mongoose.model('Customers', customerSchema)