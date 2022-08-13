import express from "express";
import responseCode from "exceptions/responseCode";
import responseMessage from "exceptions/responseMessage";
import User from "types/users";

import UsersDataSource from "database/UserDataSource";
import AuthService from "services/AuthService";
const usersDataSource = new UsersDataSource();
const authService = new AuthService(usersDataSource);

export default async function RegisterController(
  req: express.Request,
  res: express.Response
) {
  const userObj: User = req.body;
  await authService.registerUser(userObj);
  return res.status(responseCode.SUCCESS).send(responseMessage.USER_CREATED);
}
