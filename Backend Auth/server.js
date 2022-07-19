import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import authRoutes from "./src/routes/auth.routes.js";
import helloRoutes from "./src/routes/hello.routes.js";
import userRoute from "./src/routes/user.routes.js"
import errorMiddleware from "./src/middlewares/error.middleware.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes());
app.use("/hello", helloRoutes());
app.use("/register", userRoute())
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
