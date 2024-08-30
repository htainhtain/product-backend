const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    thumbnail: {
        type: String,
        require: [true, "Please enter the product thumbnail image url"]    
    },
    mobile: {
        type: String,
        require: [true, "Please enter the product mobile image url"],
    },
    desktop: {
        type: String,
        require: [true, "Please enter the product mobile image url"],
    },
    tablet: {
        type: String,
        require: [true, "Please enter the product mobile image url"],
    }
})

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
    },
    category: {
        type: String,
        required: [true, "Please enter the product category"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
    },
    image: {
        type: ImageSchema,
        required: [true],
    },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product
