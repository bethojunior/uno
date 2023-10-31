import express, { Router, Request, Response, response } from "express";
import { userRoutes } from "./routes/api/userRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({data: 'Serve online'});
});


export { router };
