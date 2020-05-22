const router = require('express').Router()
const feed = require('./feed')

router.use('./feed', feed)

module.exports = router
