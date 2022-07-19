import jwt from 'jsonwebtoken';

class JwtService {
  generate(email, name) {
    const accessToken = jwt.sign(
      {
        name: name,
        type: process.env.JWT_ACCESS,
      },
      process.env.JWT_KEY,
      {
        subject: email,
        expiresIn: parseInt(process.env.JWT_ACCESS_TIME, 10),
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
      }
    );

    const refreshToken = jwt.sign(
      {
        name: name,
        type: process.env.JWT_REFRESH,
      },

      process.env.JWT_KEY,
      {
        subject: email,
        expiresIn: parseInt(process.env.JWT_REFRESH_TIME, 10),
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
      }
    );

    return { accessToken, refreshToken };
  }
}

export default new JwtService();
