const fetch = require('node-fetch')

async function getData(url) {
  await fetch(`${url}`)
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err)
    })
}

getData('http://podcasts.joerogan.net/feed')
