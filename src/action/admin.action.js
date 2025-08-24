import Agent from "./superAgent";
import { ServerError } from "../utils/helpers";
import Cookies from "universal-cookie";
import settings from "../config/config";
const cookie = new Cookies();

const BACKEND_URL = settings.BACKEND_URL;

const signIn = (payload, cb) => {
  Agent.fire("post", `${BACKEND_URL}/auth/signIn`)
    .send(payload)
    .end((err, res) => {
      var error =
        err || res.error
          ? ServerError(res)
          : res.body && res.body.error
          ? ServerError(res)
          : null;
      let userData = JSON.parse(
        JSON.stringify((res && res.body && res.body.data) || {})
      );
      if (!error) {
        cookie.set("token", userData, { path: "/" });
      }
      if (typeof cb === "function") return cb(error, userData);
    });
};

const signUp = (payload, cb) => {
  Agent.fire("post", `${BACKEND_URL}/auth/signUp`)
    .send(payload)
    .end((err, res) => {
      var error =
        err || res.error
          ? ServerError(res)
          : res.body && res.body.error
          ? ServerError(res)
          : null;
      let userData = JSON.parse(
        JSON.stringify((res && res.body && res.body.data) || {})
      );
      if (!error) {
        cookie.set("token", userData, { path: "/" });
      }
      if (typeof cb === "function") return cb(error, userData);
    });
};

const createQuestion = (payload, cb) => {
  Agent.fire("post", `${BACKEND_URL}/question/createQuestion`)
    .send(payload)
    .end((err, res) => {
      var error =
        err || res.error
          ? ServerError(res)
          : res.body && res.body.error
          ? ServerError(res)
          : null;
      if (typeof cb === "function") return cb(error, res && res.body);
    });
};

const uploadFiles = (files, cb) => {
  const req = Agent.fire("post", `${BACKEND_URL}/question/uploadImages`);

  files.forEach((file) => {
    req.attach("attachments", file); // backend field name
  });

  req.end((err, res) => {
    const error =
      err || res.error
        ? ServerError(res)
        : res.body && res.body.error
        ? ServerError(res)
        : null;

    if (typeof cb === "function") return cb(error, res && res.body);
  });
};

const AdminAction = {
  signIn,
  signUp,
  createQuestion,
  uploadFiles,
};

export default AdminAction;
