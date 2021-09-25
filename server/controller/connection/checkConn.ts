import express from 'express'
exports.checkConnection=(req: express.Request,res:express.Response)=>{
    return res.json({"flag":"Connected"})
}