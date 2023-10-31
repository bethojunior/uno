import express, { Request, Response } from "express";
import UserRepository from "../../repositories/user/userRepository";

const repository = new UserRepository();

class UserService {
  store(req: Request): any {
    let user;
    // return req;
    try {
      user = repository.store(req);
    } catch (error) {
      return error;
    }
    return user;
  }
}


export default UserService;
