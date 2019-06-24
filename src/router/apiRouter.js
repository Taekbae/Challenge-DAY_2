import express from "express";
import routes from "../routes";
import {
  api,
  apiDocumentation,
  apiBuy,
  apiRefund,
  apiRemove,
  apiEdit
} from "../controller/apiController";

// "/api"
const apiRouter = express.Router();

apiRouter.get(routes.home, api);
apiRouter.get(routes.apiDocumentation, apiDocumentation);
apiRouter.get(routes.apiBuy, apiBuy);
apiRouter.get(routes.apiRefund, apiRefund);
apiRouter.get(routes.apiRemove, apiRemove);
apiRouter.get(routes.apiEdit, apiEdit);

export default apiRouter;
