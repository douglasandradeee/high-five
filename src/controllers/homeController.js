const homeController = {
    viewHome:(req, res) => {
        res.render("home")
    },
    viewLoginPage: (req,res) => {
        res.render("login")
    },
    userLogin:(req,res) => {
        res.redirect('/')
    }
}
module.exports = homeController