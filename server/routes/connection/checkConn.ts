import express, { Router } from "express"
import {Constants} from '../../../constants/Constants'

const checkConnRouter = express.Router()

const {checkConnection} = require('../../controller/connection/checkConn')
checkConnRouter.get((new Constants.RoutingConstants).WEB_API_CONNECTION,checkConnection)

export = checkConnRouter