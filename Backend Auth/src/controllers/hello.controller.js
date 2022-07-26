import helloService from "../services/hello.service.js";

class HelloController {
  loggedIn(req, res, next) {
    try {
      return res.status(200).send(helloService.loggedIn(req));
    } catch (err) {
      next(err);
    }
  }
}

export default new HelloController();
