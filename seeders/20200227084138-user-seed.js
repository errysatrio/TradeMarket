'use strict';
const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', [
      {
        nama: 'Andy',
        user_name: 'Andy',
        password: bcrypt.hashSync('123', salt),
        role: 'Admin',
        email: '123@qwe.com',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        nama: 'Budi',
        user_name: 'Budi',
        password: bcrypt.hashSync('inibaru', salt),
        email: 'asd@qwe.com',
        role: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Chika',
        user_name: 'Budi',
        password: bcrypt.hashSync('inilama', salt),
        email: 'qwe@qwe.com',
        role: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Doni',
        user_name: 'Doni',
        password: bcrypt.hashSync('inianeh', salt),
        email: 'poiu@qwe.com',
        role: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
