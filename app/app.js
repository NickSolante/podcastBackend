const fetch = require('node-fetch')
const { md5 } = require('./lib/hash')
const { get } = require('lodash')
const Parser = require('rss-parser')
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml',
  },
})

const { sequelize, models } = require('./models')
const { Podcast } = models

async function rssFetching(url) {
  let feed = await parser.parseURL(url)
  return feed.items.map((item) => ({
    pcreatorID: item.creator,
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
    guid: md5(get(item, 'guid', item.link)),
    isoDate: item.isoDate,
  }))
}

rssFetching().then((finalFeed) => {
  return sequelize.transaction((transaction) =>
    Promise.all(
      finalFeed.map((post) => {
        return Podcast.upsert(post, { transaction })
      })
    )
  )
})

module.exports = rssFetching
