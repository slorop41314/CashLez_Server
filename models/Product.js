const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    categoryId : {
        type : Schema.ObjectId,
        required: true,
        ref : 'Category'
    },
    userId : {
        type : Schema.ObjectId,
        required: true,
        ref : 'User'
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Product", ProductSchema)