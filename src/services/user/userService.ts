import { Request } from "express";
import UserRepository from "../../repositories/user/userRepository";

const repository = new UserRepository();

class UserService {
  store(req: Request): any {
    let user;
    try {
      user = repository.store(req);
    } catch (error) {
      return error;
    }
    return user;
  }
}

export default UserService;
