const { Schema, model } = require('mongoose')

const adSchema = Schema({
  _id: Schema.Types.ObjectId,
  body: String
})

module.exports = model('Ad', adSchema)