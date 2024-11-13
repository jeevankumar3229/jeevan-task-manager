'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Task extends Model {
    static associate(models) {
    }
  }
  Task.init(
    {
      id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      title: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      description: DataTypes.TEXT,
      priority: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      dueDate: { 
        type: DataTypes.DATE, 
        allowNull: false 
      },
      status: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      userId: { 
        type: DataTypes.INTEGER, 
        references: { model: "Users", key: "id" } 
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  return Task;
};
