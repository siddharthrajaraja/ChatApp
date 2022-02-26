import { Router } from "express";
import { Constants } from "../../../constants/Constants";
const bodyParser = require("body-parser");
const routingConstants = new Constants.RoutingConstants();
const { register } = require("../../controller/register/register");
const registerRouter = Router();
const jsonParser = bodyParser.json();
import validRegisterBody from "../../../middlewares/register/validRegisterBody";
import userExists from "../../../middlewares/register/userExists";
registerRouter.post(
  routingConstants.WebApiRegister,
  jsonParser,
  validRegisterBody,
  userExists,
  register
);
export = registerRouter;
