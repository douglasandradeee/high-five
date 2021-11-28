const express = require('express');
const methodOverride = require("method-override");
const app = express();
const port = 7000;
const path = require('path');
const routes = require('./routes/index');

//configurando o template egine ejs
app.use(methodOverride("_method"));
app.set('view engine', 'ejs');
app.set('views', path.resolve("src", "views"));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.query = req.query;
  next();
});

app.use(routes);
app.listen(port, () => console.log(`The server is runing on port:${port}`));