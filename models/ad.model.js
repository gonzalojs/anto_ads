const { Schema, model, index } = require('mongoose')

const adSchema = Schema({
  _id: {
    type: String,
    required: true
  },
  body: String
})
adSchema.index({
  '$**': 'text'
})
module.exports = model('Ad', adSchema)