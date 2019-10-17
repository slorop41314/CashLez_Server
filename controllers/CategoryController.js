const User = require('../models/User')
const Category = require('../models/Category')
const mongoose = require('mongoose')

const _ = require('lodash');



module.exports = {
    index : async(req, res, next) => {
        const allcategory = await Category.find({})
        res.send(allcategory)
    },
    getUserCategory : async(req, res, next) => {
        const { userId } = req.params
        const userCategory = await Category.aggregate(
            [ { $match : { userId : mongoose.Types.ObjectId(userId) } } ]
        );
        res.send(userCategory)
    },
    store : async(req, res, next) => {
        try {
        const user = await User.findById(req.body.userId)
        if(!user) {
            res.status(400).send("User tidak ditemukan")
        }
        else {
            const newCategory = new Category(_.pick(req.body ,  'categoryname'))
            newCategory.userId = user._id
            await newCategory.save()
            user.category.push(newCategory.id)
            await user.save()
            res.status(201).send("Berhasil ditambahkan")
        }
    }
    catch (e) {
        console.log(e)
    }
    }
}