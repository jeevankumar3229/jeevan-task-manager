import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

import config from "../config/config";
import User from "./User";
import Task from "./Task";

dotenv.config();

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);


const db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;