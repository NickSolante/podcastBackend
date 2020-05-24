const { rssFetching } = require('../../../app');
const { sequelize, models } = require('../../../models');

const { Podcast } = models;

const fetchContent = async (job) => {
  const { data } = job;
  console.log('job starts at phase 1 ' + JSON.stringify(data));
  const { name, link } = data;

  console.log(`phase 2 ${name} ${link}`);

  console.log(`fetching data for ${name}`);
  const feed = await rssFetching(link);

  job.progress(50);
  console.log(feed);

  await sequelize.transaction((transaction) =>
    Promise.all(
      feed.map((podcast) => {
        return Podcast.upsert(podcast, { transaction });
      }),
    ),
  );

  job.progress(100);

  // eslint-disable-next-line no-console
  console.log(`job for ${name} successful`);
  return feed;
};

module.exports = { fetchContent };
