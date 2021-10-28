const carrinhoController = {
    viewCarrinho: (req, res) => {
        res.render("carrinho")
    },

    finalizacaoCompra: (req,res) =>{
        res.render("finalizacaoCompra");
    }
}
module.exports = carrinhoController