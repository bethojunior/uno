import { Request, Response } from "express";
import UserService from "../../services/user/userService";

const userService = new UserService();

class UserController {
  store(req: Request, res: Response): void {
    let user;
    try {
      user = userService.store(req.body);
    } catch (error) {
      res.json({ message: "error to create user: " + error });
    }
    res.json({ message: "user created with success", data: user }).status(201);
  }

  update(id: BigInt, req: Request, res: Response): void {
    let user;
    try {
      user = userService.update(id,req.body);
    } catch (error) {
      res.json({ message: "error to update user: " + error });
    }
    res.json({ message: "user updated with success", data: user }).status(200);
  }
}

export default UserController;
