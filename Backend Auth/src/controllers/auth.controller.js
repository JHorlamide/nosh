import authService from "../services/auth.service.js";

class AuthController {
  async login(req, res, next) {
    try {
      const { access, refresh } = authService.login(req.body);
      return res.status(200).send({
        access,
        refresh,
      });
    } catch (err) {
      next(err);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { access, refresh } = await authService.refresh({
        email: req.body.email,
        name: req.body.first_name,
        token: req.body.refresh,
      });
      
      return res.status(200).send({
        access,
        refresh,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController();
