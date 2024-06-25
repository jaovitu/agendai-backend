/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      scheduleID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'schedules',
          key: 'id'
        }
      },

      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');
  }
};
