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

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
});

Usuario.create({
  nome: "Victor",
  sobrenome: "Lima",
  idade: 20,
  email: 'victor_lima@gmail.com'
});

Usuario.create({
  nome: "Roberto",
  sobrenome: "Pinheiro",
  idade: 58,
  email: 'roberto@gmail.com'
});

Usuario.create({
  nome: "Ana Regina",
  sobrenome: "Lopes",
  idade: 38,
  email: 'ana_lopes@gmail.com'
});
