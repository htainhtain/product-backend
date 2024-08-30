const express = require('express')
const { 
    createProduct,
    getAllProducts,
    getAProduct,
    updateProduct,
    deleteProduct
 } = require('../controller/product.controller')
const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getAProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

router.put('/', (req, res) => {
    res.send('product put')
})

router.delete('/', (req, res) => {
    res.send('product delete')
})

module.exports = router