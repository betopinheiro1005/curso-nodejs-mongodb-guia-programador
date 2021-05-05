const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", function(req, res){
  res.send("Minha página sobre");
});

app.get("/blog", function(req, res){
  res.send("Bem-vindo ao meu blog!");
});

// abrindo o servidor com Express (essa deve ser a última função do código)

app.listen(8081, function(){
  console.log("Servidor rodando na URL: http://localhost:8081");
});
