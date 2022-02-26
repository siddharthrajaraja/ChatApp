import { Sequelize } from "sequelize";
const dotenv = require("dotenv").config();

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  host: "localhost",
  dialect: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  username: process.env.POSTGRES_USER,
});

export = sequelize;
