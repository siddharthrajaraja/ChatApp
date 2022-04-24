import jwt from 'jsonwebtoken'
import Users from 'database/model/Users'

const dotenv = require('dotenv')

export default function signJWT (user: Users) {
  const userObj = {
    email: user.get('email'),
    password: user.get('password'),
    mobile: user.get('mobile'),
    username: user.get('username')
  }

  return jwt.sign(userObj, String(process.env.JWT_SECRET))
}
