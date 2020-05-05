const Parser = require('rss-parser')
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml',
  },
})

// intervalID
//https://changelog.com/master/feed
//feeds.feedwrench.com/dev-ed.rss'

//rss.simplecast.com/podcasts/279/rss
async function rssFetching() {
  let feed = await parser.parseURL(
    'https://rss.simplecast.com/podcasts/279/rss'
  )
  console.log(feed.items)
}

rssFetching()
