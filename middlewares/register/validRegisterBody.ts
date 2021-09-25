import express from "express"
import responseCode from '../../Exceptions/responseCode'
import responseMessage from '../../Exceptions/responseMessage'
function validRegisterBody(req:express.Request,res:express.Response,next:express.NextFunction){
    try{
        if(req.body.email===undefined||req.body.password===undefined||req.body.username===undefined)
        {
            throw responseMessage.INVALID_BODY
        }
        next()
    }
    catch(error){
        return res.status(responseCode.INTERNAL_SERVER_ERROR).send(error)
    }
}
export = validRegisterBody