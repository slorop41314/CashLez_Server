'use strict'

const bcrypt = require('bcrypt');
const _ = require('lodash');

const  User  = require('../models/User')
const Transaction = require('../models/Transaction')


module.exports = {
    index : async (req, res, next) => {
        const alluser = await User.find({})
        res.status(200).send(alluser)
    },

    newUser : async (req , res , next) => {

        const user = await User.findOne({username : req.body.username})
        if (user) {
            res.status(400).send('Username sudah digunakan')
        }else {
            const newUser = new User(_.pick(req.body , ['fullname', 'email','password','phonenumber', 'gender', 'username', 'businessname','businessadress','referralcode']))
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(newUser.password, salt);

            await newUser.save() 
            res.status(201).send('Register Success')
        }
    },

    getUser : async (req, res, next ) => {
        const { userId } = req.params
        const user = await User.findById(userId)
        res.status(200).json(user)
    },

    storeTransaction : async (req, res, next) => {
        const { userId } = req.params
        const user = await User.findById(userId)
        if(user) {
            const newTransaction = new Transaction(_.pick(req.body , ['produkyangdibeli','totalbelanja', 'cashtendered','change', 'customerData']))
            newTransaction.userId = userId
            newTransaction.save()
            res.send(newTransaction)
        }
        else {
            res.status(400).send('User tidak ditemukan')
        }
       
    },

    getTransaction : async (req, res, next) => {
        const {userId} = req.params
        const alltransaction = await Transaction.find({userId})
        res.send(alltransaction)
    }

}
