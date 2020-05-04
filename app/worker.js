var schedule = require('node-schedule')
const Parser = require('rss-parser')
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml',
  },
})

// var j = schedule.scheduleJob('5 * * * * *', function (firebase) {
//   console.log(
//     'The answer to life, the universe, and everything! ' +
//       firebase +
//       ', but actually ran at ' +
//       new Date()
//   )
// })
// const intervalID = setInterval(() => console.log('Task executed'), 5000)

// intervalID
//https://changelog.com/master/feed

async function rssFetching() {
  let feed = await parser.parseURL('https://changelog.com/master/feed')
  console.log(feed.items)
}

rssFetching()
