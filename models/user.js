'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class User extends Model { }
  User.init({
    nama: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`name cant be empty`
        }
      }
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`username cant be empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`name cant be empty`
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      
    },
    balance: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeSave: (instance, option) => {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
      }
    }, sequelize
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Company, { through: models.Stock })
  };
  return User;
};