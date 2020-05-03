const podcast = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('podcast', {
    pcreatorID: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pubDate: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    contentSnippet: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    guid: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    isoDate: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
  })
  return Podcast
}

module.exports = podcast
