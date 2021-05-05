const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Config

// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('test', 'root', '123456', {
  host: "localhost",
  dialect: "mysql"
});

// Rotas
app.get('/create_post', function(req, res){
  res.render('formulario');
});

app.post('/store_post', function(req, res){
  res.send("Título: " + req.body.titulo + "<br>Conteúdo: " + req.body.conteudo);
});

app.listen(8081, function(){
  console.log("Servidor rodando na URL: http://localhost:8081");
});
