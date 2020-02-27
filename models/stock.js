'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Stock extends Model { }
  Stock.init({
    CompanyId: DataTypes.INTEGER,
    UserId: DataTypes.STRING
  }, { sequelize });
  Stock.associate = function (models) {
    // associations can be defined here
  };
  return Stock;
};