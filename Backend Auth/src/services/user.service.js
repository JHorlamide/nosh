import UserModel from '../model/user.model.js';

class UserService {
  User = UserModel.getUserModel();

  async CreateUser(userBodyField) {
    const user = new this.User(userBodyField);
    await user.save();

    return { userId: user.id };
  }

  async checkIfUserExist(email) {
    return await this.User.findOne({ email });
  }
}

export default new UserService();
