import express, { Request, Response } from "express";
import UserRepository from "../../repositories/user/userRepository";

const repository = new UserRepository();

class UserService {
  store(req: Request): any {
    const { body } = req;
    let user;
    try {
      user = repository.store(body);
    } catch (error) {
      return error;
    }
    return user;
  }
}


export default UserService;
