import express, { Router, Request, Response } from "express";
import UserValidator from "../../Validator/userValidator";

const userValidator = new UserValidator();

const userRoutes = Router();

userRoutes
  .route("/api/user/:id")
  .post((request: Request, response: Response) => {
    userValidator.validateAndStore(request, response);
  })
  .get((request: Request, response: Response) => {
    userValidator.validateAndStore(request, response);
  })
  .put((request: Request, response: Response) => {
    const userId = request.params.id; // Obtenha o parâmetro id da URL
    userValidator.validateAndUpdate(request, response, userId);
  })

export { userRoutes }