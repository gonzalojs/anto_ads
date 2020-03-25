const { Schema, model } = require('mongoose')

const opsSchema = Schema({
  _id: String,
  title: {
    type: String,
    trim: true
  },
  header: {
    type: String,
    trim: true
  }
})

module.exports = model('Opts', opsSchema)