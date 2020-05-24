const podcast = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('podcast', {
    pcreatorID: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pubDate: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    contentSnippet: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
    guid: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    isoDate: {
      type: DataTypes.STRING(1234),
      allowNull: true,
    },
  });
  return Podcast;
};

module.exports = podcast;
