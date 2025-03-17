import express from "express"; // Express модулийг импортлох
import { config } from "dotenv"; // Dotenv модулиас config функцийг импортлох
import authRoutes from "./routes/authRoutes.js"; // authRoutes модулийг импортлох

const app = express(); // Express-ийн шинэ instance үүсгэх
const port = 7000; // Портын дугаарыг тодорхойлох

app.use("/", authRoutes); // Root URL-д authRoutes-ийг ашиглах

app.listen(
  port,
  () =>
    // Серверийг эхлүүлж, тодорхойлсон порт дээр сонсох
    console.log("Server is running on port: http://localhost:" + port) // Сервер эхэлсэн үед мессежийг логлох
);
