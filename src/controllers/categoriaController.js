const { Category, Product } = require("../models");

const categoriaController = {
  viewCategoria: async (req, res) => {
    const categories = await Category.findAll();
    res.render("categoria", { categories });
  },
  showCategoria: async (req, res) => {
    const { id } = req.params;
    const categories = await Category.findAll();
    const title = await Category.findAll({
      where: {
        CategoryID: id,
      },
    });
    const category = await Category.findOne({
      where: {
        CategoryID: id,
      },
      include: {
        model: Product,
        as: "products",
        required: true,
      },
    });
    return res.render("categoriaf", { title, category, categories });
  },
};
module.exports = categoriaController;
