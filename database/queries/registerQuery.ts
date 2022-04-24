import User from "types/users";
import Users from "database/model/Users";

export default async function registerUser(user: User) {
  await Users.create(user);
}
