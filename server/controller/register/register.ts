import {App} from '../../../model/users/usersModel'
import express from 'express'
exports.register=(req : express.Request,res : express.Response)=>{
    console.log(req.body)
    //Users userObj = new Users(req.body.username,req.body.email,req.body.password)
    //console.log(userObj.getUsername())
    res.status(200).json({'flag':'OK'})
}