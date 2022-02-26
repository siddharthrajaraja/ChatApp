import { Express } from "express";
import { Constants } from "../constants/Constants";
import checkConnRouter from "./routes/connection/checkConn";
import registerRouter from "./routes/auth/register";
import loginRouter from "./routes/auth/login";
export function gateway(app: Express) {
  const routingConstants = new Constants.RoutingConstants();
  app.use(routingConstants.WebAPI, checkConnRouter);
  app.use(routingConstants.WebAPI, registerRouter);
  app.use(routingConstants.WebAPI, loginRouter);
}
