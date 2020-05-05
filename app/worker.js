const { PodcastWorkerQueue } = require('./lib/queue')
const { sequelize } = require('./models')
const { fetchContent } = require('./lib/queue/worker')

const onFailFetchContent = async (job) => {
  return alert.error(job.data)
}

sequelize.sync({ force: true }).then(() => {
  PodcastWorkerQueue.process('*', fetchContent)
  PodcastWorkerQueue.on('failed', onFailFetchContent)
})
