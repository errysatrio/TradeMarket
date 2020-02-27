'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const bcrypt = require('bcryptjs');
  class User extends Model { }
  User.init({
    nama: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance,option) =>{
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        user.password = hash
      }
}, sequelize });
User.associate = function (models) {
  // associations can be defined here
  User.belongsToMany(models.Company, { through: models.Stock })
};
return User;
};