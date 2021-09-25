import express, { Router } from "express"
import {Constants} from '../../../constants/Constants'
const checkConnRouter = express.Router()
const routingConstants = new Constants.RoutingConstants();
const {checkConnection} = require('../../controller/connection/checkConn')
checkConnRouter.get(routingConstants.WebApiConnection,checkConnection)
export = checkConnRouter