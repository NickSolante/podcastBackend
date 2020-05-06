const Parser = require('rss-parser')
require('dotenv').config()
const { md5 } = require('./lib/hash')
const { get } = require('lodash')
const contentConfig = require('./content/index')
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml',
  },
})

const { REDIS_URL } = process.env

// intervalID
//https://changelog.com/master/feed
//feeds.feedwrench.com/dev-ed.rss'

//rss.simplecast.com/podcasts/279/rss
const rssFetching = async (url) => {
  let feed = await parser.parseURL(
    'https://rss.simplecast.com/podcasts/279/rss'
  )
  finalFeed = feed.items.map((item) => ({
    pcreatorID: item.creator,
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    contentSnippet: item.contentSnippet,
    guid: md5(get(item, 'guid', item.link)),
    isoDate: item.isoDate,
  }))
  console.log(finalFeed)
}

// rssFetching()

// console.log(REDIS_URL)

// contentConfig.forEach((config) => rssFetching(config.url))

// const feed = await fetchFeed(contentMode.value, url, previewConfig)

// const fetchFeed = async (contentMode, url, previewConfig) => {
//   switch (contentMode) {
//     case RSS:
//       return fetchRSS(url, previewConfig)
//     default:
//       throw new Error(`contentMode ${contentMode} not recognised`)
//   }
// }

// const fetchRSS = async (url, previewConfig) => {
//   const feed = await parser.parseURL(url)
//   return feed.items.map((item) => ({
//     postId: md5(get(item, 'guid', item.link)),
//     title: item.title,
//     link: item.link,
//     timestamp: moment(item.pubDate).unix() || moment().unix(),
//     contentPreview: get(item, CONTENT_SNIPPET, null),
//     imagePreview:
//       (previewConfig.name === RSS_THUMBNAIL &&
//         get(item, previewConfig.value, null)) ||
//       (previewConfig.name === RSS_SRC &&
//         fetchPreviewFromRssContent(item.content, previewConfig.value)) ||
//       null,
//   }))
// }

const fetchContent = async (job) => {
  const feed = await rssFetching('https://changelog.com/jsparty/feed')
}

fetchContent()
