const sequelize = require('../database')

const models = {
  Podcast: sequelize.import('./podcast.js'),
}

module.exports = { sequelize, models }
