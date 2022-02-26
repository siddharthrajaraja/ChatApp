import express from "express";
import responseCode from "../../../Exceptions/responseCode";
import responseMessage from "../../../Exceptions/responseMessage";
import User from "../../../types/users";
import registerUser from "../../../database/queries/registerQuery";
exports.register = async (req: express.Request, res: express.Response) => {
  let userObj: User = req.body;
  await registerUser(userObj);
  res.status(responseCode.SUCCESS).send(responseMessage.SUCCESS);
};
