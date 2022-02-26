import { Response, Request, NextFunction } from "express";
import md5 from "md5";
import responseCode from "../../Exceptions/responseCode";
import responseMessage from "../../Exceptions/responseMessage";

function hashPassword(password: string) {
  return md5(password);
}

export default function validRegisterBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (
      req.body.email === undefined ||
      req.body.password === undefined ||
      req.body.username === undefined ||
      req.body.mobile === undefined
    ) {
      throw responseMessage.INVALID_BODY;
    }
    req.body.password = hashPassword(req.body.password);
    next();
  } catch (error) {
    return res.status(responseCode.INTERNAL_SERVER_ERROR).send(error);
  }
}
