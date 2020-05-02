const fetch = require('node-fetch')
const { md5 } = require('./lib/hash')
const { get } = require('lodash')
const Parser = require('rss-parser')
const parser = new Parser()
const { sequelize, models } = require('./models')
const { Podcast } = models

async function getData(url) {
  await fetch(`${url}`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err)
    })
}

async function rssFetching() {
  let feed = await parser.parseURL('http://podcasts.joerogan.net/feed')
  return feed.items.map((item) => ({
    pcreatorID: 'testcreator',
    title: 'test',
    link: 'testlink',
    pubDate: 'testpubDate',
    comments: 'testcomments',
    content: 'testcontent',
    contentSnippet: 'testcontentSnippet',
    guid: md5(get(item, 'guid', 'testlink')),
    isoDate: 'testisoDate',
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
