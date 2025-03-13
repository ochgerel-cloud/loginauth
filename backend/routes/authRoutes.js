import express from "express";
import { loginUser, checkLogin } from "../controllers/authController.js";

const router = express.Router();

// Логин хийх маршрут
router.post("/login", loginUser);

// Логин хийсэн хэрэглэгчдэд зориулсан маршрут
router.get("/protected", checkLogin, (req, res) => {
  res.status(200).json({ message: "This is a protected route" });
});

export default router;
