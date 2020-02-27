'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        nama: 'Andy',
        user_name: 'Andy',
        password: 'inipass',
        role: 'Admin',
        createdAt : new Date(),
        updatedAt : new Date()

      },
      {
        nama: 'Budi',
        user_name: 'Budi',
        password: 'inibaru',
        role: 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama: 'Chika',
        user_name: 'Budi',
        password: 'inilama',
        role: 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama: 'Doni',
        user_name: 'Doni',
        password: 'inianeh',
        role: 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
