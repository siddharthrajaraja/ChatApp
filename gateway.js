const {WEB_API}= require('./constants/WebConstants')
const checkConnRouter = require('./server/routes/connection/checkConn')

exports.gateway=(app)=>{
    app.use(WEB_API,checkConnRouter);
}