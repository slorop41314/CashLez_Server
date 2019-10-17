const express = require('express')

const router = require('express-promise-router')()

const ProductController = require('../controllers/ProductController')

router.route('/')
    .post(ProductController.store)
    .get(ProductController.index)
    
router.route('/:userId')
    .get(ProductController.getUserProduct)

module.exports = router