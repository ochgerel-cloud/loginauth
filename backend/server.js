import express from "express";
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";

const app = express();
console.log("SERVER STARTED ====>");
//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session тохиргоо
app.use(
  session({
    secret: "dwaawdwad",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // for development, in production set to true
  })
);

app.use("/api", authRoutes);

// Сервер эхлүүлэх
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("END OF SERVER ====>");
