import express, { Router, Request, Response } from "express";
import UserValidator from "../../Validator/userValidator";

const userValidator = new UserValidator();

const userRouter = Router();

userRouter
  .route("/api/user/:id")
  .post((request: Request, response: Response) => {
    userValidator.validateAndStore(request, response);
  })
  .get((request: Request, response: Response) => {
    userValidator.validateAndStore(request, response);
  })
  .put((request: Request, response: Response) => {
    const userId = request.params.id;
    userValidator.validateAndUpdate(request, response, userId);
  })

export { userRouter }