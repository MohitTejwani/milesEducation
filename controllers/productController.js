const productSchema = require('../models/productModel');
const customerSchema = require('../models/customerModel');
const getProductWithCustomer = async (req, res) => {
    try {
        var productId = JSON.parse(req.query.productId);
        if (!productId || productId.length <= 0) {
            throw new Error('Not able to  get ID')
        }
        const productList = await productSchema.find({
            _id:{$in:productId}
        }).populate('favoriteCustomers')
        if (productList.length) {
            res.status(200).json({
                productList
            })
        } else {
            throw new Error('Not able to found any product')
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    getProductWithCustomer
}