const { Schema, model } = require('mongoose')

const opsSchema = Schema({
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

module.exports = model('Ops', opsSchema)