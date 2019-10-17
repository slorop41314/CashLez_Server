const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TransactionSchema = new Schema ({
    userId : {
        type : Schema.ObjectId,
        required : true
    },
    totalbelanja : {
        type : Number,
        required : true
    },
    produkyangdibeli : [{
        type : Object,
        required : true
    }],
    cashtendered : {
        type : Number,
        required : true
    },
    change : {
        type : Number,
        required : true
    },
    customerData : [{
        type : Object,
        required : true
    }]
})

module.exports = mongoose.model("Transaction", TransactionSchema)
