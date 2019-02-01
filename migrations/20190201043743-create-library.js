module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('libraries', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    bookid: {
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    rating: {
      type: Sequelize.FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('libraries'),
};
