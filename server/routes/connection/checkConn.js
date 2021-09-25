const express = require('express')
const { WEB_API_CONNECTION } = require('../../../constants/WebConstants')
const router = express.Router()
const {checkConnection} = require('../../controller/connection/checkConn')
router.get(WEB_API_CONNECTION,checkConnection)
module.exports = router