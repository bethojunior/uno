import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { userRoutes } from "./routes/api/userRoutes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);
app.use(userRoutes)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
);

app.listen(port, () => {
  console.log("Server on port on 3333");
});
