import { ServerError } from '../errors/server.error.js';
import jwtService from './jwt.service.js';
import redisService from './redis.service.js';
import userService from './user.service.js';
import crypto from 'crypto';

class AuthService {
  async login({ email, password }) {
    const user = await userService.checkIfUserExist(email);

    if (user) {
      let passwordFields = user.password.split('$');
      let salt = passwordFields[0];
      let hash = crypto
        .createHmac('sha512', salt)
        .update(password)
        .digest('base64');

      if ((hash = passwordFields[1])) {
        return jwtService.generate(email, user.first_name);
      }
    }

    throw new ServerError(400, 'Invalid credentials');
  }

  async refresh({ email, name, token }) {
    await redisService.set({
      key: token,
      value: '1',
      timeType: 'EX',
      time: parseInt(process.env.JWT_REFRESH_TIME, 10),
    });

    return jwtService.generate(email, name);
  }
}

export default new AuthService();
