const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.sendFile(path.resolve("src/views", "home.html"))
})

routes.get('/home', (req, res) => {
    res.redirect('/')
})

routes.get('/products', (req, res) => {
    res.sendFile(path.resolve("src/views","products.html"))
})

module.exports= routes