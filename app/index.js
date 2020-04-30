require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const { sequelize, models } = require('./models')

const { PORT } = process.env

app.use(cors)

app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' })
})

// new: route to users, that runs readAll()
// app.get('/users', User.readAll)

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`)
  })
})
