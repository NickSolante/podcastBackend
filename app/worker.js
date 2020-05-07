const { PodcastWorkerQueue } = require('./lib/queue')
const moment = require('moment')
const { sequelize } = require('./models')
const { fetchContent } = require('./lib/queue/worker/contentWorker')

const onFailFetchContent = async (job, err) => {
  return console.error(`failed because ${err}`)
}

const onCompleteFetchContent = (job, feed) => {
  if (feed.length === 0) return
  const sortedTimestamps = feed.map((item) => item.timestamp).sort()
  const latestTimestamp = sortedTimestamps[sortedTimestamps.length - 1]
  const oneMonthAgo = moment().subtract(1, 'months').unix()
  return latestTimestamp < oneMonthAgo && alert.warn(job.data.name)
}

sequelize.sync({}).then(() => {
  PodcastWorkerQueue.process('*', fetchContent)
  PodcastWorkerQueue.on('failed', onFailFetchContent)
  PodcastWorkerQueue.on('completed', onCompleteFetchContent)
})
