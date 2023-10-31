import express, { Request, Response } from "express";
import UserService from "../../services/user/userService";

const userService = new UserService();

class UserController {
  store(req: Request, res: Response): void {
    let user;
    try {
      const { body } = req;
      user = userService.store(req);
    } catch (error) {
      res.json({ message: "error to create user: " + error });
    }

    res.json({ message: "User created with success", data: user }).status(201);
  }
}

export default UserController;
