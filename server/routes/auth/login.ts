import bodyParser from "body-parser";
import { Router } from "express";
import { Constants } from "constants/Constants";
import validLoginBody from "middlewares/login/validLoginBody";
const routingConstants = new Constants.RoutingConstants();
import LoginController from "server/controller/auth/login";
const loginRouter = Router();
const jsonParser = bodyParser.json();
loginRouter.post(
  routingConstants.WebApiLogin,
  jsonParser,
  validLoginBody,
  LoginController
);
export default loginRouter;
