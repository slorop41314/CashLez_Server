'use strict'

const express = require('express')

const router = require('express-promise-router')()

const UserController = require('../controllers/UserController')

router.route('/')
    .post(UserController.newUser)
    .get(UserController.index)
    
router.route('/:userId')
    .get(UserController.getUser)

router.route('/:userId/transaction')
    .post(UserController.storeTransaction)
    .get(UserController.getTransaction)


module.exports = router
