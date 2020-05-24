require('dotenv').config()
const cors = require('cors')
const express = require('express')
const router = require('./routes')
const { sequelize, models } = require('./models')
const { Podcast } = models

const { PORT } = process.env
const app = express()

app.use(cors)
app.use(router)

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`listening to podcast ${PORT}`))
    console.log('success')
  })
  .catch(() => console.error('fail'))
