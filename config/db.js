const {
  connect
} = require('mongoose')
require('dotenv').config()

const uri = 'mongodb+srv://anto:antonimia1@antodb1.2r3hu.mongodb.net/antodb1?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB