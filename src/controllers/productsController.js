const { Product, Category } = require("../models");
const uuid = require("uuidv4");

const productsController = {
  listAdmProducts: async (req, res) => {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: "category",
        required: true,
      },
    });
    const categories = await Category.findAll();
    // console.log(categories);

    return res.render("admin/home", { products, categories });
  },
  createAdmProduct: async (req, res) => {
    const {
      ProductName,
      ProductPrice,
      ProductCategoryID,
      ProductDesc,
      ProductImage,
    } = req.body;

    try {
      const product = await Product.create({
        ProductName,
        ProductPrice,
        ProductCategoryID,
        ProductDesc,
        ProductImage,
      });
      res.status(201).json({ message: "cadastrado com sucesso!" });
      return res.redirect("/admin/home");
    } catch (e) {
      console.log(e.message);
      return res.redirect("/admin/home");
    }
  },
  updateAdmProduct: async (req, res) => {
    const id = req.params.id*1;
    console.log(typeof id,' - ', id);
    console.log('body =', req.body);
    const {
      ProductName,
      ProductPrice,
      ProductCategoryID,
      ProductDesc,
      ProductImage,
    } = req.body;

    try {
      const updateProduct = await Product.update(
        {
          ProductName,
          ProductPrice,
          ProductCategoryID,
          ProductDesc,
          ProductImage,
        },
        {
          where: {
            ProductID: id,
          },
        }
      );
      console.log(updateProduct);
      return res.redirect(`/admin/home?msg=updated&id=${id}`);
    } catch (e) {
      console.log(e.message);
      return res.redirect("/admin/home?msg=error");
    }
  },
  viewProducts: async (req, res) => {
    res.render("products");
  },

  viewProductsNew: async (re, res) => {
    res.render("products-new");
  },

  cadastrarProduto: async (req, res) => {
    const { nome, modelo, categoria, preco, descricao, imagem } = req.body;

    try {
      const product = await Product.create({
        id: uuid(),
        nome,
        modelo,
        categoria,
        preco,
        descricao,
        imagem,
        create_at: new Date().toISOString(),
      });
      res.status(201).json({ message: "cadastrado com sucesso!" });
    } catch (e) {
      console.log(e.message);
      return res.redirect("/produtos/cadastrar");
    }
  },
  listarProdutos: async (req, res) => {
    try {
      const products = await Product.findAll();

      return res.status(200).json(products);
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ message: "Não foi possível listar os produtos", error: e });
    }
  },
  deletarProduto: async (req, res) => {
    const { id } = req.params;

    try {
      await Product.destroy({
        where: { id },
      });
      return res.status(200).end();
    } catch (e) {
      return res
        .status(500)
        .json({ message: "Não foi possível deletar o produto" });
    }
  },
};
module.exports = productsController;
