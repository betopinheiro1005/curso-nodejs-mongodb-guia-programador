const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Model - Usuario

const Usuario = new Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    eAdmin: {
      type: Number,
      default: 0
    },
    senha: {
        type: String,
        required: true
      },
  })
  
  // Collection
  
  mongoose.model('usuarios', Usuario)
