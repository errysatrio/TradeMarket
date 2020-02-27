'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Company extends Moel { }
  Company.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    changez: DataTypes.FLOAT
  }, { sequelize });
  Company.associate = function (models) {
    // associations can be defined here
    Company.belongsToMany(models.User,{through:models.Stock})
  };
  return Company;
};