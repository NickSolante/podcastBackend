const rssFetching = require('../../../app')
const { sequelize, models } = require('../../../models/')

const { Podcast } = models

const fetchContent = async (job) => {
  const { data } = job
  const { name, link } = data

  console.log(`fetching data for ${name}`)
  const feed = await fetchFeed(link)

  await sequelize.transaction((transaction) =>
    Promise.all(
      feed.map((podcast) => {
        return Podcast.upsert(podcast, { transaction })
      })
    )
  )
}
