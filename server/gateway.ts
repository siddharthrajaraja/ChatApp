import {Express} from 'express';
import {Constants} from '../constants/Constants'
import checkConnRouter from './routes/connection/checkConn';
import registerRouter from './routes/register/register'

export function gateway(app : Express){
    app.use((new Constants.RoutingConstants).WEB_API,checkConnRouter);
    app.use((new Constants.RoutingConstants).WEB_API,registerRouter)
}
