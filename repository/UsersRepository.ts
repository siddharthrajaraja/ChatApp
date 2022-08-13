import User from "types/users";

export default interface UsersRepository {
  registerUser(user: User): any;

  validRegisterBody(user: User): Promise<Boolean>;

  userExists(user: User): Promise<Boolean>;
}
