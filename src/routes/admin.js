const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productsController');

router.post('/cadastrar', ProductController.cadastrarProduto);
router.get('/listar-produtos', ProductController.listarProdutos);
router.delete('/deletar-produto', ProductController.deletarProduto);

module.exports = router;
