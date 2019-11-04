const { Schema, model } = require('mongoose')

const opsSchema = Schema({
  title: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  }
})

module.exports = model('Ops', opsSchema)