import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import { gateway } from "./gateway";
import "../database/config/dbConnections/psql.spec";
const app = express();
const dotenv = require("dotenv");
const jsonParser = bodyParser.json();

gateway(app);

app.use(jsonParser);

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`RUNNING EXPRESS SERVER AT : ${process.env.EXPRESS_PORT}`);
});
