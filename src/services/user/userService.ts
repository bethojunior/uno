import { Request } from "express";
import UserRepository from "../../repositories/user/userRepository";
import { User } from "@prisma/client";

const repository = new UserRepository();

class UserService {
  store(req: Request): User | Error {
    let user;
    try {
      user = repository.store(req);
    } catch (error) {
      return error;
    }
    return user;
  }

  update(id: BigInt, req: Request): User | Error {
    let user;
    try {
      user = repository.update(id, req);
    } catch (error) {
      return error;
    }
    return user;
  }
}

export default UserService;
