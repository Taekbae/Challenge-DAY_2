import express from "express";
import routes from "../routes";
import { confirmAccount } from "../controller/accountController";

// "/login"
const accountRouter = express.Router();

accountRouter.get(routes.home, confirmAccount);

export default accountRouter;
