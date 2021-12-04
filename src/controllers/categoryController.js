const { Product, Category } = require("../models");

const categoryController = {
  indexCategory: async (req, res) => {
    const categories = await Category.findAll();

    return res.render("admin/category", {
      categories,
      page_name: "category-list",
    });
  },
  showCategory: async (req, res) => {
    const { id } = req.params;
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
    return res.render("admin/show-category", {
      category,
      title,
      page_name: "category-list",
    });
  },
  formCategory: async (req, res) => {
    return res.render("admin/create-category", {
      page_name: "create-category",
    });
  },
  createCategory: async (req, res) => {
    const { CategoryName } = req.body;

    try {
      const category = await Category.create({
        CategoryName,
      });
      return res.redirect(`/admin/category?msg=created`);
    } catch (e) {
      console.log(e.message);
      return res.redirect("/admin/category?msg=error");
    }
  },
};

module.exports = categoryController;
