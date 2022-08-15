import UsersRepository from "repository/UsersRepository";
import User from "types/users";

export default class AuthService {
  private userRepo: UsersRepository;

  constructor(userRepo: UsersRepository) {
    this.userRepo = userRepo;
  }

  public async registerUser(user: User) {
    await this.userRepo.registerUser(user);
  }

  public async validRegisterBody(user: User): Promise<Boolean> {
    return await this.userRepo.validRegisterBody(user);
  }

  public async userExists(user: User): Promise<Boolean> {
    return await this.userRepo.userExists(user);
  }
}
