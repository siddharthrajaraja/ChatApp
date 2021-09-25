import {UsersModel} from '../../../model/users/usersModel'
import express from 'express'
import responseCode from '../../../Exceptions/responseCode'
import responseMessage from '../../../Exceptions/responseMessage'
exports.register=(req : express.Request,res : express.Response)=>{
    console.log(req.body)
    const user = new UsersModel.Users(req.body.username,req.body.password,req.body.email);
    res.status(responseCode.SUCCESS).send(responseMessage.SUCCESS)
}