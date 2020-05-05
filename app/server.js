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

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`listening to podcst ${PORT}`))
    console.log('success')
  })
  .catch(() => console.error('fail'))
