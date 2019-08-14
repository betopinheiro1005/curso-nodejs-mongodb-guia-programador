const Sequelize = require('sequelize');

// Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!");
}).catch(function(erro){
  console.log("Falha ao se conectar: " + erro);
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};
