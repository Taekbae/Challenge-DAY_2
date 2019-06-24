import express from "express";
import routes from "../routes";
import { course, courseNew, courseMine } from "../controller/courseController";

// "/course"
const courseRouter = express.Router();

courseRouter.get(routes.home, course);
courseRouter.get(routes.courseNew, courseNew);
courseRouter.get(routes.courseMine, courseMine);

export default courseRouter;
