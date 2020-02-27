'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stocks', [
      {
        CompanyId: 2,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CompanyId: 3,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CompanyId: 1,
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CompanyId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Stocks', null, {});

  }
};
