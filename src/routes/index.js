const express = require("express");
const routes = express.Router();
const homeController = require("../controllers/homeController");
const categoriaController = require("../controllers/categoriaController");
const productsController = require("../controllers/productsController");
const carrinhoController = require("../controllers/carrinhoController");
const userPainelController = require("../controllers/userPainelController");
const routesAdmin = require("../routes/admin");
const { viewProductsNew } = require("../controllers/productsController");
const authController = require("../controllers/authController");
const categoryController = require("../controllers/categoryController");

routes.use("/admin", routesAdmin);

routes.get("/", homeController.viewHome);

routes.get("/home", homeController.viewHome);

routes.get("/categoria", categoriaController.viewCategoria);

routes.get("/products", productsController.viewProducts);

routes.get("/products-new", productsController.viewProductsNew);

routes.get("/carrinho", carrinhoController.viewCarrinho);

routes.get("/finalizacao-compra", carrinhoController.finalizacaoCompra);

routes.get("/user-painel", userPainelController.viewUserPainel);

routes.get("/login", homeController.viewLoginPage);

routes.post("/login-auth", homeController.userLogin);

routes.get("/admin/login", authController.viewLogin);
routes.post("/admin/login", authController.loginAdmin);
routes.get("/admin/register", authController.viewRegister);
routes.post("/admin/register", authController.registerAdmin);

routes.get("/admin", productsController.indexAdmProducts);
routes.get("/admin/list", productsController.listAdmProducts);
routes.get("/admin/create-product", productsController.formAdmProduct);
routes.post("/admin/save-product", productsController.createAdmProduct);
routes.put("/admin/udpate-product/:id", productsController.updateAdmProduct);

routes.get("/admin/category", categoryController.indexCategory);
routes.get("/admin/category/:id/products", categoryController.showCategory);
routes.get("/admin/create-category", categoryController.formCategory);
routes.post("/admin/save-category", categoryController.createCategory);

module.exports = routes;
