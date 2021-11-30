const { Administrator } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  viewLogin: (req, res) => {
    return res.render("admin/auth/login");
  },
  viewRegister: (req, res) => {
    return res.render("admin/auth/register");
  },
  registerAdmin: async (req, res) => {
    try {
      const { AdminName, AdminUser, AdminPass } = req.body;
      const hash = bcrypt.hashSync(AdminPass, 10);
      const admin = await Administrator.create({
        AdminName,
        AdminUser,
        AdminPass: hash,
      });
      return res.redirect("/admin/login");
    } catch (err) {
      console.log(err);
      return res.redirect("/admin/register");
    }
  },
  loginAdmin: async(req, res) => {
    try {
      const { AdminUser, AdminPass } = req.body;
      const admin = await Administrator.findOne({
        where: {
          AdminUser,
        },
      });
      if (!admin) {
        return res.render("admin/auth/login", { error: "Does not exist username!" });
      }
      if (!bcrypt.compareSync(AdminPass, admin.AdminPass)) {
        return res.render("admin/auth/login", { error: "Wrong password!" });
      }
      Object.assign(req.session, {
        admin: {
          id: admin.AdminID,
          name: admin.AdminName,
        },
      });

      return res.redirect("/admin");
    } catch (error) {
      console.log(error);
      return res.render("/admin/login", {
        error: "Sistema indisponivel tente novamente!",
      });
    }
},
};

module.exports = authController;
