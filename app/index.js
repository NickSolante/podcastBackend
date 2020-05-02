require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const { sequelize, models } = require('./models')
const rssFetching = require('./app')

const { PORT } = process.env

app.use(cors)

app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' })
})

sequelize
  .sync({ force: true })
  .then(rssFetching)
  .then(() => {
    console.log('success')
  })
  .catch(() => console.error('fail'))
