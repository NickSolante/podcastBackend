const router = require('express').Router();
const { models } = require('../../models');

const { Podcast } = models;

router.post('/', async (req, res) => {
  const feed = await Podcast.findAll({
    limit: 20,
  });
  res.send({ data: feed });
});

module.exports = router;
