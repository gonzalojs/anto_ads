const { Schema, model } = require('mongoose')

const antoSchema = Schema({
  _id: String,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = model('Anto', antoSchema)