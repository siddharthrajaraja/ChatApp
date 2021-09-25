import express from 'express'
import { Constants } from '../../../constants/Constants';
const bodyParser = require('body-parser')

const { register } = require('../../controller/register/register');
const registerRouter = require('../connection/checkConn')
const jsonParser = bodyParser.json();
registerRouter.post((new Constants.RoutingConstants).WEB_API_REGISTER,jsonParser,register)
export = registerRouter