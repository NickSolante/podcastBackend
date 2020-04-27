const fetch = require('node-fetch')
const Parser = require('rss-parser')
const parser = new Parser()

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
  // console.log(feed.items)
  // var compressedContent = { ...feed.items}

  var compressedContent = feed.items.filter((e) => Object.keys())

  console.log(compressedContent)
}

rssFetching()
