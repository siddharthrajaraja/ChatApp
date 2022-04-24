import express from 'express'
import userExistsQuery from 'database/queries/userExistQuery'
import responseCode from 'exceptions/responseCode'
import responseMessage from 'exceptions/responseMessage'
import signJWT from 'middlewares/jwt/sign'
import User from 'types/users'
import md5 from 'md5'

export default async function LoginController (
  req: express.Request,
  res: express.Response
) {
  const userObj: User = req.body
  const data = await userExistsQuery(userObj)
  if (data?.get('password') != md5(userObj.password)) {
    return res
      .status(responseCode.SUCCESS)
      .send(responseMessage.PASSWORD_MISMATCH)
  }
  const message =
    data == null ? responseMessage.NO_RECORDS_FOUND : signJWT(data)
  return res.status(responseCode.SUCCESS).send(message)
}
