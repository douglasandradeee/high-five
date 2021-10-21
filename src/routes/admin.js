const express = require('express');
const router = express.Router();
const AdminControllers = require('../controllers/productsController');

router.post('/cadastrar', AdminControllers.cadastrarProduto);
router.get('/listar-produtos', AdminControllers.listarProdutos);
router.delete('/deletar-produto', AdminControllers.deletarProduto);

module.exports = router;
