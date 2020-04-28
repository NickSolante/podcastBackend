require('dotenv').config()
const Sequelize = require('sequelize')
// your credentials
const { DATABASE_URL } = process.env

const sequelize = new Sequelize(DATABASE_URL)

try {
  sequelize.authenticate()
  console.log('authenictation success')
} catch (error) {
  console.log('error', error)
}

module.exports = sequelize
