import {UsersModel} from '../../../model/users/usersModel'
import express from 'express'
exports.register=(req : express.Request,res : express.Response)=>{
    console.log(req.body)
    const user = new UsersModel.Users(req.body.username,req.body.password,req.body.email);
    res.status(200).json({'flag':'OK'})
}