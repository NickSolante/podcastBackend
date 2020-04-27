const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send({ message: 'endpoint working' })
})

app.listen(PORT, () => {
  console.log(`server running at https://loclahost:${PORT}/`)
})
