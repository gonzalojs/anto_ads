const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const connectDB = require('./config/db')

require('dotenv').config()
connectDB()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use('uploads', express.static('uploads'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000
  }
}))

app.use(express.static(path.join(__dirname, 'public')))

//aqui va passport
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null
  next()
})

//import routes
app.use('/', require('./routes/index.routes'))
app.use('/anto', require('./routes/anto.routes'))

module.exports = app