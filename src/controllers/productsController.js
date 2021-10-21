const { Product } = require('../models');
const uuid = require('uuidv4');

const productsController = {
    viewProducts: (req, res) => {
        res.render("products")
    },
    cadastrarProduto: async (req, res) => {
        const { nome, modelo, categoria, preco, descricao, imagem } = req.body;

        try {
            const produto = await Product.create({
                id: uuid(),
                nome,
                modelo,
                categoria,
                preco,
                descricao,
                imagem,
                create_at: new Date().toISOString()
            });
            res.status(201).json({ message: 'cadastrado com sucesso!'})
        }catch(e){
            console.log(e.message);
            return  res.redirect('/produtos/cadastrar');
        }

    },
    listarProdutos: async(req, res) => {
        try {
            const produtos = await Product.findAll();

            return res.status(200).json(produtos);
        }catch(e) {
            return res.status(500).json({ message: 'Não foi possível listar os produtos' });
        }
    },
    deletarProduto: async(req, res) => {
        const { id } = req.params;

        try {
            await Product.destroy({
                where: { id }
            });
        return res.status(200).end()

        }catch(e) {
        return res.status(500).json({ message: 'Não foi possível deletar o produto' });
        }
    }
}
module.exports = productsController
