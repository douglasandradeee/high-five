const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController')
const categoriaController = require('../controllers/categoriaController');
const productsController = require('../controllers/productsController');
const carrinhoController = require('../controllers/carrinhoController');

routes.get('/',homeController.viewHome);

routes.get('/home', homeController.viewHome);

routes.get('/categoria', categoriaController.viewCategoria);

routes.get('/products', productsController.viewProducts);

routes.get('/carrinho', carrinhoController.viewCarrinho);

module.exports= routes;