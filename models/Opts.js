const { Schema, model } = require('mongoose')

const opsSchema = Schema({
  _id: String,
  title: {
    type: String
  },
  header: {
    type: String
  },
  subtitle: {
    type: String
  }
})

module.exports = model('Opts', opsSchema)