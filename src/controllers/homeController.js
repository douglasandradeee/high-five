const { Product, Category } = require("../models");

const homeController = {
  viewHome: async (req, res) => {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: "category",
        required: true,
      },
    });
    const categories = await Category.findAll();
    res.render("home", { products, categories });
  },
  viewLoginPage: (req, res) => {
    res.render("login");
  },
  userLogin: (req, res) => {
    res.redirect("/");
  },
};
module.exports = homeController;
