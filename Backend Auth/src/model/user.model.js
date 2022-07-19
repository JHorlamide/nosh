import MongooseService from '../services/mongoose.service.js';

class UserModel {
  Schema = MongooseService.getMongoose().Schema;

  userSchema = new this.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, require: true },
      password: { type: String, required: true },
      email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
      },
    },
    { timestamps: true }
  );

  getUserModel() {
    return MongooseService.getMongoose().model('User', this.userSchema);
  }
}

export default new UserModel();
