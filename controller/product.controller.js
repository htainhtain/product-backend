const Product = require('../model/product.model')
const asyncErrorHandler = require('../utils/asyncErrorHandler')
const customError = require('../utils/customError')

const createProduct = asyncErrorHandler(async (req, res, next) => {
    const {name, category, price, image} = req.body 
    if (!name || !category || !price || !image) {
        throw new customError("bad input", 400)
    }

    const {mobile, tablet, desktop, thumbnail} = image
    if (!mobile || !tablet || !desktop || !thumbnail) {
        throw new customError("bad input", 400)
    }

    const createdProduct = await Product.create(req.body)
    res.status(201).json(createdProduct)
})

const getAllProducts = asyncErrorHandler(async (req, res, next) => {
    const products = await Product.find()
    res.status(200).json(products)
})

const getAProduct = asyncErrorHandler(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
        throw new customError("product not found", 404)
    }
    res.status(200).json(product)
})

const updateProduct = asyncErrorHandler(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body)
    if (!product) {
        throw new customError("product not found", 404)
    }

    const updateProduct = await Product.findById(id)
    res.status(200).json(updateProduct)
})

const deleteProduct = asyncErrorHandler(async (req, res, next) => {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    if (deletedProduct === undefined) {
        throw new customError("product not found", 404)
    }
    res.status(200).json(deletedProduct)
})

module.exports = {
    createProduct,
    getAllProducts,
    getAProduct,
    updateProduct,
    deleteProduct
}