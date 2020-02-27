'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Astra',
        price:  488201,
        changes: 2415,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Telkom',
        price: 112444,
        changes: 879,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Unilever',
        price: 997532,
        changes: 1547,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Gudang Garam',
        price: 265012,
        changes: 8466,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Companies', null, {});

  }
};
