import { Request, Response } from "express";
import UserController from "../controllers/user/userController";

class UserValidator {
  userController: UserController;

  constructor() {
    this.userController = new UserController();
  }

  validateAndUpdate(req: Request, res: Response, id: BigInt): void {
    if (typeof req.body.name !== "string" || !req.body.name.trim()) {
      res.status(400).json({ error: "Invalid user name data"});
    }

    if (!isValidEmail(req.body.email)) {
      res.status(400).json({ error: "Invalid user email data" });
    }

    this.userController.update(id, req, res);
  }

  validateAndStore(req: Request, res: Response): void {
    const isValid = this.store(req.body);

    if (isValid) {
      this.userController.store(req, res);
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  }

  private store(userData: any): boolean {
    const { name, email, password } = userData;

    if (typeof name !== "string" || !name.trim()) {
      return false;
    }

    if (!isValidEmail(email)) {
      return false;
    }

    if (typeof password !== "string" || password.length < 8) {
      return false;
    }

    return true;
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default UserValidator;
