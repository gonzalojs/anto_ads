const { Schema, model } = require('mongoose')
const shortid = require('shortid')

const adSchema = Schema({
  _id: {
    type: String,
    required: true
  },
  body: String
})

module.exports = model('Ad', adSchema)