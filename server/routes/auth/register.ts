import { Router } from "express";
import { Constants } from "constants/Constants";
import RegisterController from "server/controller/auth/register";
import validRegisterBody from "middlewares/register/validRegisterBody";
import userExists from "middlewares/register/userExists";

const bodyParser = require("body-parser");
const routingConstants = new Constants.RoutingConstants();
const registerRouter = Router();
const jsonParser = bodyParser.json();

registerRouter.post(
  routingConstants.WebApiRegister,
  jsonParser,
  validRegisterBody,
  userExists,
  RegisterController
);
export = registerRouter;
