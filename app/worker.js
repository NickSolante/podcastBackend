const PodcastWorkerQueue = require('./lib/queue')
const { sequelize } = require('./models')
const rssFetching = require('./app')

sequelize
  .sync({ force: true })
  .then(rssFetching)
  .then(() => {
    console.log('success')
  })
  .catch(() => console.error('fail'))
