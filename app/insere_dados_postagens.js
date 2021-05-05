const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!");
}).catch(function(erro){
  console.log("Falha ao se conectar: " + erro);
});

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

Postagem.create({
  titulo: "Título da primeira postagem",
  conteudo: "Descrição ou conteúdo da primeira postagem"
});
