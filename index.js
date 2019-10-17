'use strict'

const mongoose = require('mongoose');

const users = require('./routes/users')
// const dataproperti = require('./src/routes/dataproperti');
const auth = require('./routes/auth');
const category = require('./routes/category')
const product = require('./routes/product')

// const images = require('./src/routes/images')


const path = require('path')
const express = require('express');
const app = express();
// const multer = require("multer");



mongoose.connect("mongodb://localhost:27017/cashlezdb", {useNewUrlParser:true,  useUnifiedTopology: true})
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

// app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(express.static('public'))

app.use(express.json());
app.use('/users', users);
app.use('/auth', auth);
app.use('/category', category);
app.use('/product', product);

// app.use('/api/dataproperti', dataproperti);
 
const port = process.env.PORT || 4005;
app.listen(port, () => console.log(`Listening on port ${port}...`));