import { createTransport } from "nodemailer";
import * as dotenv from "dotenv";
import path from "path";

//The below config setup was unable to be resolved. Need to connect and see on this

const config = dotenv.config({
  path: path.resolve(__dirname, "./env"),
}).parsed;

export default async function sendMail(reci: String[]) {
  var transport = {
    host: config?.SMTP_HOST,
    secureConnection: false,
    port: config?.SMTP_PORT,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: config?.MAILER_USER,
      pass: config?.MAILER_PASS,
    },
  };
  var transporter = createTransport(transport);

  var toObj = "";

  //The below loop is implementation logic. It has to be refactored
  for (var i = 0; i < reci.length; i++) {
    if (i == reci.length - 1) {
      toObj += reci[i];
      continue;
    }
    toObj += reci[i] + ", ";
  }
  console.log(toObj);

  var mailOptions = {
    from: '"Chatapp Adwins" <serscad19@outlook.com>',
    to: toObj,
    subject: "Development of nodemailer with outlook is in progress",
    text: "Hello world",
    html: '<b>Hi Team!</b><br><br>\
         Development of the bulkmailer is in progress. If you are getting this mail, then you are <b><i>LUCKY!</i></b>\
         <br><br> Make sure you update the following link with your latest update. <br><a href="https://docs.google.com/document/d/18x3gtDnSbIp1Zko32op4n-l2U0yfEY1fFOA1nVOK04c/edit#">Tasks</a><br>\
        <br> Please be noted that this mailing function has to be refined for <b>TS</b>.\
        <br><br><br>Happy coding!',
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log(info.response);
    return info.response;
    //Return response is like:
    //250 2.0.0 OK <SG2PR01MB436374B1057F304AB66B5FD0A5B29@SG2PR01MB4363.apcprd01.prod.exchangelabs.com> [Hostname=SG2PR01MB4363.apcprd01.prod.exchangelabs.com]
  });
}
