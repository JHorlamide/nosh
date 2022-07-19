import UserService from '../services/user.service.js';
import crypto from 'crypto';

class UserController {
  async registerUser(req, res, next) {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto
      .createHmac('sha512', salt)
      .update(req.body.password)
      .digest('base64');

    req.body.password = salt + "$" + hash;
    try {
      const { userId } = await UserService.CreateUser(req.body);
      
      return res.status(201).send({
        status: true,
        data: { userId },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
