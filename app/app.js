const { md5 } = require('./lib/hash');
const { get } = require('lodash');
const Parser = require('rss-parser');
const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml',
  },
});

const rssFetching = async (url) => {
  let feed = await parser.parseURL(url);
  console.log('here in rss fetching');
  return feed.items.map((item) => ({
    pcreatorID: item.creator,
    title: item.title,
    link: item.link,
    pubDate: item.pubDat,
    contentSnippet: item.contentSnippet,
    guid: md5(get(item, 'guid', item.link)),
    isoDate: item.isoDate,
  }));
};

module.exports = { rssFetching };
