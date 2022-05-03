import "reflect-metadata";
import bodyParser from "body-parser";
import express, { Express } from "express";
import { gateway } from "server/gateway";
import "database/config/dbConnections/psql.spec";
import loadConfigs from "server/loadConfigs";
import "cache/config/redis.spec";

const app = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);

gateway(app);

async function listen(express_port: string, app: Express) {
  await app.listen(express_port, () => {
    console.log(`RUNNING EXPRESS SERVER AT : ${express_port}`);
  });
}

listen(loadConfigs().EXPRESS_PORT, app);
