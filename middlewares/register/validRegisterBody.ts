import { Response, Request, NextFunction } from "express";
import md5 from "md5";
import responseCode from "exceptions/responseCode";
import responseMessage from "exceptions/responseMessage";
import User from "types/users";

import UsersDataSource from "database/UserDataSource";
import AuthService from "services/AuthService";

const usersDataSource = new UsersDataSource();
const authService = new AuthService(usersDataSource);

function hashPassword(password: string) {
  return md5(password);
}

export default async function validRegisterBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user: User = req.body;

    if (await authService.validRegisterBody(user)) {
      throw responseMessage.INVALID_BODY;
    }

    // hash user password in request body
    req.body.password = hashPassword(req.body.password);

    next();
  } catch (error) {
    return res.status(responseCode.INTERNAL_SERVER_ERROR).send(error);
  }
}
