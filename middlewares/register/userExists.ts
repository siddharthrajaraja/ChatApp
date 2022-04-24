import { Response, Request, NextFunction } from "express";
import responseCode from "exceptions/responseCode";
import responseMessage from "exceptions/responseMessage";
import userExistsQuery from "database/queries/userExistQuery";
import User from "types/users";

export default async function userExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user: User = req.body;
    if ((await userExistsQuery(user)) != null) throw new Error();
    next();
  } catch (error) {
    console.debug(error);
    return res
      .status(responseCode.INTERNAL_SERVER_ERROR)
      .send(responseMessage.USER_EXISTS);
  }
}
