const router = require('express').Router();
const generate = require('./generate');

router.use('/generate', generate);

module.exports = router;
