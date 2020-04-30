const fetch = require('node-fetch')
const Parser = require('rss-parser')
const parser = new Parser()
const { sequelize, Podcasts } = require('./models')

async function getData(url) {
  await fetch(`${url}`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err)
    })
}

// getData('http://podcasts.joerogan.net/feed')

async function rssFetching() {
  let feed = await parser.parseURL('http://podcasts.joerogan.net/feed')
  console.log(feed.items)
}

rssFetching()

await sequelize.transaction((transaction) =>
  Promise.all(
    finalFeed.map((post) => {
      return Podcast.upsert(post, { transaction }).then((isNew) => {
        if (isNew) newPostIds.push(post.postId)
      })
    })
  )
)
