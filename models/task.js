'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: sequelize.STRING, allowNull: false },
      description: sequelize.TEXT,
      priority: { type: sequelize.STRING, allowNull: false },
      dueDate: { type: sequelize.DATE, allowNull: false },
      status: { type: sequelize.STRING, allowNull: false },
      userId: { type: sequelize.INTEGER, references: { model: "Users", key: "id" } },
      createdAt: sequelize.DATE,
      updatedAt: sequelize.DATE,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};