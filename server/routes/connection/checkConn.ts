import express from "express";
import { Constants } from "constants/Constants";
import { checkConnection } from "server/controller/connection/checkConn";

const checkConnRouter = express.Router();
const routingConstants = new Constants.RoutingConstants();

checkConnRouter.get(routingConstants.WebApiConnection, checkConnection);
export = checkConnRouter;
