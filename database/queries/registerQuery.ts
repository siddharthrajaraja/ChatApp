import User from '../../types/users'
import Users from '../model/Users'

export default async function registerUser(user:User){
    await Users.create(user)
}