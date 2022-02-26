import express from "express";
import userExistsQuery from "../../../database/queries/userExistQuery";
import responseCode from "../../../Exceptions/responseCode";
import responseMessage from "../../../Exceptions/responseMessage";
import signJWT from "../../../middlewares/jwt/sign";
import User from "../../../types/users";

export default async function LoginController(
  req: express.Request,
  res: express.Response
) {
  let userObj: User = req.body;
  const data = await userExistsQuery(userObj);
  const message =
    data == null ? responseMessage.NO_RECORDS_FOUND : signJWT(data);
  return res.status(responseCode.SUCCESS).send(message);
}
