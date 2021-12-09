const carrinhoController = {
    viewCarrinho: (req, res) => {
        res.render("carrinho")
    },

    finalizacaoCompra: (req,res) =>{
        res.render("finalizacaoCompra");
    },

    viewCarrinhoNew: (req,res) => {
        res.render("carrinhoNovo");
    }
}
module.exports = carrinhoController