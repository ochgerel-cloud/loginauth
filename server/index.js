import express from "express"; // Express модулийг импортлох
import { config } from "dotenv"; // Dotenv модулиас config функцийг импортлох
import authRoutes from "./routes/authRoutes.js"; // authRoutes модулийг импортлох
import { mongoose } from "mongoose"; // Mongoose модулийг импортлох
import cookieParser from "cookie-parser";

config(); // Environment variables-ийг ачаалах

const app = express(); // Express-ийн шинэ instance үүсгэх

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Database connection error: ", err); // Алдааг логлохдоо console.error ашиглах
  }); // MongoDB-тай холбогдох

app.use(express.json()); // JSON-ийг ашиглах
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); // URL-ийг ашиглах

app.use("/", authRoutes); // Root URL-д authRoutes-ийг ашиглах

const port = 7000; // Портын дугаарыг тодорхойлох
app.listen(
  port,
  () =>
    // Серверийг эхлүүлж, тодорхойлсон порт дээр сонсох
    console.log("Server is running on port: http://localhost:" + port) // Сервер эхэлсэн үед мессежийг логлох
);
