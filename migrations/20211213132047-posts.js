'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Post = queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable("Posts");
  }
};