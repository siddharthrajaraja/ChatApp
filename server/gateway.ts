import { Express } from 'express'
import { Constants } from 'constants/Constants'
import checkConnRouter from 'server/routes/connection/checkConn'
import registerRouter from 'server/routes/auth/register'
import loginRouter from 'server/routes/auth/login'

export function gateway (app: Express) {
  const routingConstants = new Constants.RoutingConstants()
  app.use(routingConstants.WebAPI, checkConnRouter)
  app.use(routingConstants.WebAPI, registerRouter)
  app.use(routingConstants.WebAPI, loginRouter)
}
