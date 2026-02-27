import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error.middleware";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes)


app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use(errorMiddleware);