const express = require('express');
const app = express();
const port = 7000;
const path = require('path');
const routes = require('./routes/index');

//configurando o template egine ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve("src", "views"));

app.use(express.static("public"));
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.log(`The server is runing on port:${port}`));