const { Product, Category } = require("../models");
const uuid = require("uuidv4");

const productsController = {
  indexAdmProducts: async (req, res) => {
    return res.render("admin/index", {page_name: 'home'})
  },
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

    return res.render("admin/list", { products, categories, page_name: 'product-list' });
  },
  formAdmProduct: async (req, res) => {
    const categories = await Category.findAll();
    return res.render("admin/create-product", { categories, page_name: 'create-product' });
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
      return res.redirect(`/admin/list?msg=created`);
    } catch (e) {
      console.log(e.message);
      return res.redirect("/admin/list?msg=error");
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
      // console.log(updateProduct);
      return res.redirect(`/admin/list?msg=updated&id=${id}`);
    } catch (e) {
      console.log(e.message);
      return res.redirect("/admin/list?msg=error");
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
        .json({ message: "N??o foi poss??vel listar os produtos", error: e });
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
        .json({ message: "N??o foi poss??vel deletar o produto" });
    }
  },
};
module.exports = productsController;
