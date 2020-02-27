'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        nama: 'Andy',
        user_name: 'Andy',
        password: '123',
        role: 'Admin',
        email:'qwe@qwe.com',
        createdAt : new Date(),
        updatedAt : new Date()

      },
      {
        nama: 'Budi',
        user_name: 'Budi',
        password: 'inibaru',
        email:'qwe@qwe.com',
        role: 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama: 'Chika',
        user_name: 'Budi',
        password: 'inilama',
        email:'qwe@qwe.com',
        role: 'User',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nama: 'Doni',
        user_name: 'Doni',
        password: 'inianeh',
        email:'qwe@qwe.com',
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
