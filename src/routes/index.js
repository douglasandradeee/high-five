const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController')
const categoriaController = require('../controllers/categoriaController');
const productsController = require('../controllers/productsController');
const carrinhoController = require('../controllers/carrinhoController');
const userPainelController = require('../controllers/userPainelController');
const routesAdmin = require('../routes/admin');

<<<<<<< HEAD
routes.use('/admin', routesAdmin);
=======
routes.use('/produtos', produtosRotasAdmin);
>>>>>>> dev

routes.get('/',homeController.viewHome);

routes.get('/home', homeController.viewHome);

routes.get('/categoria', categoriaController.viewCategoria);

routes.get('/products', productsController.viewProducts);

routes.get('/carrinho', carrinhoController.viewCarrinho);

routes.get('/finalizacao-compra', carrinhoController.finalizacaoCompra);

routes.get('/user-painel', userPainelController.viewUserPainel);

routes.get('/login', homeController.viewLoginPage);

routes.post('/login-auth', homeController.userLogin)

module.exports= routes;