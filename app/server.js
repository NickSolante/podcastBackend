require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const { sequelize, models } = require('./models')
const { Podcast } = models

const { PORT } = process.env

app.use(cors)

app.get('/podcast', async (req, res) => {
  const feed = await Podcast.findAll()
  res.send({ data: feed })
})

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => console.log(`listening to podcst ${PORT}`))
    console.log('success')
  })
  .catch(() => console.error('fail'))
