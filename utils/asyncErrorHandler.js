const asyncErrorHandler = (controller) => {
    return (req, res, next) => {
        controller(req, res, next).catch(err => {
            console.log()
            next(err)
        })
    }
} 

module.exports = asyncErrorHandler