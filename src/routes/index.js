const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/', (req, res) => {
    res.render("home")
});
routes.get('/home', (req, res) => {
    res.redirect('/')
});
routes.get('/categoria', (req, res) => {
    res.render(path.resolve("src/views", "categoria"))
});

routes.get('/products', (req, res) => {
    res.render(path.resolve("src/views","products"))
});

module.exports= routes;