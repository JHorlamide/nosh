import userService from '../services/user.service.js';

class UserMiddleware {
  validateRegisterFields(req, res, next) {
    let errors = [];

    if (req.body) {
      if (!req.body.email) {
        errors.push('Missing email field');
      }

      if (!req.body.password) {
        errors.push('Missing password field');
      }

      if (!req.body.first_name) {
        errors.push('Missing first name field');
      }

      if (!req.body.last_name) {
        errors.push('Missing last name field');
      }

      if (errors.length) {
        return rest.status(400).send({
          status: false,
          errors: errors.join(','),
        });
      } else {
        return next();
      }
    } else {
      return rest.status(400).send({
        status: false,
        errors: 'Please provided the required fields',
      });
    }
  }

  async validateUserAlreadyExist(req, res, next) {
    const user = await userService.checkIfUserExist(req.body.email);

    if (user) {
      return res.status(400).send({
        status: false,
        message: 'User already exists',
      });
    }

    return next();
  }
}

export default new UserMiddleware();