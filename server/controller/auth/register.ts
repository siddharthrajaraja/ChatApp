import express from "express";
import responseCode from "Exceptions/responseCode";
import responseMessage from "Exceptions/responseMessage";
import User from "types/users";
import registerUser from "database/queries/registerQuery";

export default async function RegisterController(
  req: express.Request,
  res: express.Response
) {
  let userObj: User = req.body;
  await registerUser(userObj);
  return res.status(responseCode.SUCCESS).send(responseMessage.USER_CREATED);
}
