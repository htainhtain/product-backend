const express = require('express')
const connectDB = require('../database/database')
const customError = require('../utils/customError')
const errorControlller = require('../controller/error.controller')
const cors = require('cors')
const expressApp = express()

const productRouter = require('../routes/product.route')
expressApp.use(cors())
expressApp.use(express.json())
expressApp.use('/api/v1/products', productRouter)
expressApp.all('*', (req, res, next) => {
    const error = new customError(`fail to get ${req.url}`, 404)
    next(error)
})

expressApp.use(errorControlller)

const startExpressServer = () => {
    expressApp.listen(3000, () => console.log("server is running on port 3000"))
}

const run = () => {
    connectDB().
    then(() => startExpressServer()).
    catch((err) => console.log(err))
}

module.exports = { run }



