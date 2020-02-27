'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class User extends Model { }
  User.init({
    nama: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, { sequelize });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Company,{through:models.Stock})
  };
  return User;
};