'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const convertValue = require('../helpers/convertValue')
  class Company extends Model { }
  Company.init({
    companyName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    changes: DataTypes.FLOAT
  }, {
    hooks: {
      afterFind: (instance, options) => {
        // console.log(instance[0].price)
        instance.forEach(el => {
          el.price = convertValue(el.price)
        })
      }
    }, sequelize
  });
  Company.associate = function (models) {
    // associations can be defined here
    Company.belongsToMany(models.User, { through: models.Stock })
  };
  return Company;
};