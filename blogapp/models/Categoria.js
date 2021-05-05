const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Model - Categoria

const Categoria = new Schema({
  nome: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
})

// Collection

mongoose.model('categorias', Categoria)
