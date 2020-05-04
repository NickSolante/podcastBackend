const Queue = require('bull')
const { REDIS_URL } = process.env

const PODCAST_WORKER_QUEUE = 'podcast content worker'

const PodcastWorkerQueue = new Queue(PODCAST_WORKER_QUEUE, REDIS_URL)

module.exports = PodcastWorkerQueue
