const express = require('express')

const router = require('express-promise-router')()

const CategoryController = require('../controllers/CategoryController')

router.route('/')
    .post(CategoryController.store)
    .get(CategoryController.index)
    
router.route('/:userId')
    .get(CategoryController.getUserCategory)

module.exports = router