import bodyParser from "body-parser";
import { Router } from "express";
import { Constants } from "../../../constants/Constants";
import validLoginBody from "../../../middlewares/login/validLoginBody";
const routingConstants = new Constants.RoutingConstants();
const loginRouter = Router();
const jsonParser = bodyParser.json();
import LoginController from "../../controller/auth/login";
loginRouter.post(
  routingConstants.WebApiLogin,
  jsonParser,
  validLoginBody,
  LoginController
);
export default loginRouter;
