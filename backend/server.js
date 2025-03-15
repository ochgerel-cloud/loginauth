import express from "express";
import session from "express-session";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();
console.log("SERVER STARTED ====>");
//MiddleWares
app.use(cors({ origin: "http://localhost:3099" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session тохиргоо
app.use(
  session({
    secret: "WA%^5Df%^hb6500",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 2000000 }, // for development, in production set to true
  }),
  (req, res, next) => {
    console.log("REQ SESSION: ", req.session.userId);
    next();
  }
);

app.use("/api", authRoutes);

// Сервер эхлүүлэх
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("END OF SERVER ====>");
