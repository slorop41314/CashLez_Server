const Category = require('../models/Category')
const Product = require('../models/Product')
const User = require('../models/User')

const mongoose = require('mongoose')
const _ = require('lodash');



module.exports = {
    index : async(req, res, next) => {
        const allproduct = await Product.find({})
        res.status(200).send(allproduct)
    },
    getUserProduct : async(req,res,next) => {
        const { userId }  = req.params
        const userProduct = await Product.aggregate(
            [ { $match : { userId : mongoose.Types.ObjectId(userId) } } ]
        );
        res.send(userProduct)
    },
    store : async(req, res, next) => {
        try {
        const category = await Category.findById(req.body.categoryId)
        const user = await User.findById(req.body.userId)
        if(!category) {
            res.status(400).send("User tidak ditemukan")
        }
        else {
            const newProduct = new Product(_.pick(req.body ,  ['name', 'price']))
            newProduct.categoryId = category._id
            newProduct.userId = user._id
            await newProduct.save()
            category.product.unshift(newProduct.id)
            await category.save()
            res.status(201).send("Berhasil ditambahkan")
        }
    }
    catch (e) {
        console.log(e)
    }
    }
}
