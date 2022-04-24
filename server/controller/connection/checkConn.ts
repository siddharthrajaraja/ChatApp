import express from 'express'
import responseCode from 'exceptions/responseCode'
import responseMessage from 'exceptions/responseMessage'

export function checkConnection (req: express.Request, res: express.Response) {
  return res.status(responseCode.SUCCESS).send(responseMessage.SUCCESS)
}
