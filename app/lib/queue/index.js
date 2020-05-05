const Queue = require('bull')
const contentConfig = require('../../content/index')
const { REDIS_URL } = process.env

const PODCAST_WORKER_QUEUE = 'podcast content worker'

const PodcastWorkerQueue = new Queue(PODCAST_WORKER_QUEUE, REDIS_URL)

contentConfig.forEach((config) =>
  PodcastWorkerQueue.add(config.name, config, {
    repeat: { cron: '*/30 * * * *' },
  })
)

module.exports = { PodcastWorkerQueue }
