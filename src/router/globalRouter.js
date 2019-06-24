import express from "express";
import routes from "../routes";
import { home, join } from "../controller/globalController";

// "/"
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);

export default globalRouter;
