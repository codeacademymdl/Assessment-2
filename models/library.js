module.exports = (sequelize, DataTypes) => {
  const libraries = sequelize.define('libraries', {
    bookid: DataTypes.STRING,
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    rating: DataTypes.FLOAT,
  }, {});
  //   libraries.associate = function (models) {
  //     // associations can be defined here
  //   };
  return libraries;
};
