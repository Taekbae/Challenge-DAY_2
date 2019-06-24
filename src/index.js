import express from "express";
import routes from "./routes";
import userRouter from "./router/userRouter";
import globalRouter from "./router/globalRouter";
import accountRouter from "./router/accountRouter";
import courseRouter from "./router/courseRouter";
import apiRouter from "./router/apiRouter";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.login, userRouter);
app.use(routes.confirmAccount, accountRouter);
app.use(routes.course, courseRouter);
app.use(routes.api, apiRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

export default app;
