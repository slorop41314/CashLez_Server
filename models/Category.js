const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
    userId : {
        type : Schema.ObjectId,
        required: true,
        ref : 'User'
    },
    categoryname : {
        type : String,
        required : true
    },
    product : [{
        type : String,
        ref : 'Product'
    }]
})

module.exports = mongoose.model("Category", CategorySchema)