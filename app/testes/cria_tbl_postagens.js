const Sequelize = require('sequelize');
const conexao = new Sequelize('test', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

conexao.authenticate().then(function(){
  console.log("Conectado com sucesso!");
}).catch(function(erro){
  console.log("Falha ao se conectar: " + erro);
});

const Postagem = conexao.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
});

Postagem.sync({force:true});
