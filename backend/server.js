const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
// const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api/year', require('./routes/yearRoutes'))
app.use('/api/explanations', require('./routes/explanationRoutes'))
app.use('/api/courses', require('./routes/courseRoutes'))
app.use('/api/pics', require('./routes/pictureRoutes'))
app.use('/api/units', require('./routes/unitRoutes'))
app.use('/api/topics', require('./routes/topicRoutes'))
app.use('/api/details', require('./routes/detailRoutes'))
app.use('/api/links', require('./routes/linkRoutes'))

// app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))