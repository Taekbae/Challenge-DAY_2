// globalRouter
const HOME = "/";
const JOIN = "/join";

// userRouter
const USER_LOGIN = "/login";

// accountRouter
const ACCOUNT_CONFIRM = "/confirm-account";

// courseRouter
const COURSE = "/course";
const COURSE_NEW = "/new";
const COURSE_MINE = "/mine";

// apiRouter
const API = "/api";
const API_DOCUMENTATION = "/documentation";
const API_BUY = "/v1/buy";
const API_REFUND = "/v1/refund";
const API_REMOVE = "/v2/remove";
const API_EDIT = "/v2/edit";

const routes = {
  home: HOME,
  join: JOIN,
  login: USER_LOGIN,
  confirmAccount: ACCOUNT_CONFIRM,
  course: COURSE,
  courseNew: COURSE_NEW,
  courseMine: COURSE_MINE,
  api: API,
  apiDocumentation: API_DOCUMENTATION,
  apiBuy: API_BUY,
  apiRefund: API_REFUND,
  apiRemove: API_REMOVE,
  apiEdit: API_EDIT
};

export default routes;
