import User from 'types/users'
import Users from 'database/model/Users'

export default async function userExistsQuery (user: User) {
  const data = await Users.findOne({
    where: {
      mobile: user.mobile,
      email: user.email
    }
  })
  return data
}
