import { Request, Response } from "express";
import UserController from "../controllers/user/userController";

class UserValidator {
  userController: UserController;

  constructor() {
    this.userController = new UserController();
  }

  validateAndStore(req: Request, res: Response): void {
    const isValid = this.validateUserInput(req.body);

    if (isValid) {
      this.userController.store(req, res);
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  }

  private validateUserInput(userData: any): boolean {
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
