import express from 'express'
import { Constants } from '../../../constants/Constants';
const bodyParser = require('body-parser')
const routingConstants = new Constants.RoutingConstants()
const { register } = require('../../controller/register/register');
const registerRouter = require('../connection/checkConn')
const jsonParser = bodyParser.json();
registerRouter.post(routingConstants.WebApiRegister,jsonParser,register)
export = registerRouter