const podcast = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('podcast', {
    pcreatorID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tileId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pubDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contentSnippet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isoDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })
  return Podcast
}

module.exports = podcast
