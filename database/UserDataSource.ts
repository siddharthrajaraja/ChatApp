import registerUser from "database/queries/registerQuery";
import userExistsQuery from "database/queries/userExistQuery";
import UsersRepository from "repository/UsersRepository";
import User from "types/users";

export default class UsersDataSource implements UsersRepository {
  async registerUser(user: User) {
    return await registerUser(user);
  }

  async validRegisterBody(user: User): Promise<Boolean> {
    return await (user.email === undefined ||
      user.password === undefined ||
      user.username === undefined ||
      user.mobile === undefined);
  }

  async userExists(user: User): Promise<Boolean> {
    return (await userExistsQuery(user)) != null;
  }
}
