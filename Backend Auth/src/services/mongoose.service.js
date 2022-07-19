import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const DB_URL = process.env.DB_URL
class MongooseService {
  constructor() {
    this.connectWithRetry();
  }

  getMongoose() {
    return mongoose;
  }

  async connectWithRetry() {
    mongoose
      .connect(DB_URL)
      .then(() => {
        console.log('MongoDB is connected');
      })
      .catch((error) => {
        const retrySeconds = 5;
        console.log(
          `MongoDB connection unsuccessful (will retry in #${this.count} after ${retrySeconds} seconds)`,
          error
        );
        setTimeout(this.connectWithRetry, retrySeconds * 1000);
        process.exit(1);
      });
  }
}

export default new MongooseService();
