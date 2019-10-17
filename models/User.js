const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')

const UserSchema = new Schema({
    fullname : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    gender : {
        type : String ,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    businessname : {
        type : String,
        required : true
    },
    businessadress : {
        type : String,
        required : true
    },
    referralcode : {
        type : String,
    },
    category : [{
        type : String, 
        ref : 'Category'
    }]
})

 
module.exports = mongoose.model('User', UserSchema)
