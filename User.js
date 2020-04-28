const Sequelize = require('sequelize')
const sequelize = require('./database')

const User = sequelize.define(
  'users',
  {
    nickname: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: false }
)

User.readAll = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.send({ users })
  } catch (error) {
    return res.send(error)
  }
}

module.exports = User
