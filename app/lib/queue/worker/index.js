const schedule = require('node-schedule')

var j = schedule.scheduleJob('5 * * * * *', function (firebase) {
  console.log(
    'The answer to life, the universe, and everything! ' +
      firebase +
      ', but actually ran at ' +
      new Date()
  )
})
