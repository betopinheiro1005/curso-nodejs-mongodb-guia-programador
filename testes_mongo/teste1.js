const mongoose = require('mongoose')

// Configurando o mongoose

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/testes_mongo").then(() => {
  console.log('Mongo conectado...')
}).catch((err) => {
  console.log("Houve um erro ao se conectar ao MongoDB: " + err)
});

// Model - User

const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }
})


// Collection

mongoose.model('users', UserSchema)

const user = mongoose.model('users')

new user ({
  nome: "Jhon",
  sobrenome: "Doe",
  email: "jhon@doe.com",
  idade: 34,
  pais: "EUA"
}).save().then(() => {
  console.log("Usuário cadastrado com sucesso!")
}).catch((err) => {
  console.log("Houve um erro ao registrar o usuário: " + err)
})
