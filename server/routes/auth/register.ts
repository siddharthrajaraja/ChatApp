import { Router } from "express";
import { Constants } from "../../../constants/Constants";
const bodyParser = require("body-parser");
const routingConstants = new Constants.RoutingConstants();
import RegisterController from "../../controller/auth/register";
const registerRouter = Router();
const jsonParser = bodyParser.json();
import validRegisterBody from "../../../middlewares/register/validRegisterBody";
import userExists from "../../../middlewares/register/userExists";
registerRouter.post(
  routingConstants.WebApiRegister,
  jsonParser,
  validRegisterBody,
  userExists,
  RegisterController
);
export = registerRouter;
