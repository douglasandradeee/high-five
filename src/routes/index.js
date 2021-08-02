const express = require('express')
const routes = express.Router()
const path = require('path')

routes.get('/', (req, res) => {
    res.sendFile(path.resolve("src/views", "home.html"))
})
routes.get('/home', (req, res) => {
    res.redirect('/')
})

//Rota do arquivo padrão
routes.get('/global',(req, res) => {
    res.sendFile(path.resolve("src/views", "global.html"))
})
module.exports= routes