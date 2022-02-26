import { NextFunction, Request, Response } from "express";
import User from "../../types/users";
import responseCode from "../../Exceptions/responseCode";
import responseMessage from "../../Exceptions/responseMessage";

export default function validLoginBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user: User = req.body;

  try {
    if (
      user.email === undefined ||
      user.password === undefined ||
      user.mobile === undefined
    ) {
      throw responseMessage.INVALID_BODY;
    }
    next();
  } catch (error) {
    return res.status(responseCode.INTERNAL_SERVER_ERROR).send(error);
  }
}
