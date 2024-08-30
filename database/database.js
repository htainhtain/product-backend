const mongoose = require('mongoose');

const uri = '--put your url--'

const connectDB = () => {
    return mongoose.connect(uri)
}

module.exports = connectDB