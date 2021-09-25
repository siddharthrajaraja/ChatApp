"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const gateway_1 = require("./gateway");
const app = (0, express_1.default)();
const dotenv = require('dotenv').config();
const jsonParser = body_parser_1.default.json();
(0, gateway_1.gateway)(app);
if (dotenv.error)
    throw dotenv.error;
app.use(jsonParser);
app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`RUNNING EXPRESS SERVER AT : ${process.env.EXPRESS_PORT}`);
});
