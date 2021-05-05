const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const Post = require('./models/Post');

// Config
// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

// Rotas
app.get('/', function(req, res){
  Post.findAll({order: [['id', 'desc']]}).then(function(posts){
    res.render('home', {posts: posts});
  });
});

app.get('/create_post', function(req, res){
  res.render('formulario');
});

app.post('/store_post', function(req, res){
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function(){
    res.redirect('/');
  }).catch(function(erro){
    res.send('Erro ao criar o post: ' + erro);
  });
});

app.get('/deletar/:id', function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.redirect('/');
  }).catch(function(erro){
    res.send("Esta postagem não existe!");
  });
});

app.listen(8081, function(){
  console.log("Servidor rodando na URL: http://localhost:8081");
});
