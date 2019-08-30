const { Schema, model } = require('mongoose')

const antoSchema = Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  email: String,
  password: {
    type: String,
    required: true
  }
})

module.exports = model('Anto', antoSchema)