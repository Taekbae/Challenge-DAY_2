import express from "express";
import routes from "../routes";
import { login } from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.home, login);

export default userRouter;
