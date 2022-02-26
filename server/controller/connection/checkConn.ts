import express from "express";
import responseCode from "../../../Exceptions/responseCode";
import responseMessage from "../../../Exceptions/responseMessage";
exports.checkConnection = (req: express.Request, res: express.Response) => {
  return res.status(responseCode.SUCCESS).send(responseMessage.SUCCESS);
};
