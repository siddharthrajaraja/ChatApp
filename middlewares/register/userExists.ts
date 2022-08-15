import { Response, Request, NextFunction } from "express";
import responseCode from "exceptions/responseCode";
import responseMessage from "exceptions/responseMessage";
import userExistsQuery from "database/queries/userExistQuery";
import User from "types/users";

import UsersDataSource from "database/UserDataSource";
import AuthService from "services/AuthService";

const usersDataSource = new UsersDataSource();
const authService = new AuthService(usersDataSource);

export default async function userExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user: User = req.body;
    if (await authService.userExists(user)) throw new Error();
    next();
  } catch (error) {
    console.debug(error);
    return res
      .status(responseCode.INTERNAL_SERVER_ERROR)
      .send(responseMessage.USER_EXISTS);
  }
}
