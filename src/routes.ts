import express, { Router, Request, Response, response } from "express";
import UserValidator from "./Validator/userValidator";

const userValidator = new UserValidator();

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json(true);
});

router
  .route("/user")
  .post((request: Request, response: Response) => {
    userValidator.validateAndStore(request, response);
  })
  .get((request: Request, response: Response) => {
    userValidator.validateAndStore(request, response);
  });

export { router };
