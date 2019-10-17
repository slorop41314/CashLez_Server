'use strict'

const express = require('express')

const router = require('express-promise-router')()

const AuthController = require('../controllers/AuthController')

router.route('/')
    .post(AuthController.authUser)

module.exports = router