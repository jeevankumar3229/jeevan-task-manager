'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id:{
      type: sequelize.INTEGER, primaryKey: true, autoIncrement: true
    },
    username: { type: sequelize.STRING, unique: true, allowNull: false },
    email: { type: sequelize.STRING, unique: true, allowNull: false },
    password: { type: sequelize.STRING, allowNull: false },
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};