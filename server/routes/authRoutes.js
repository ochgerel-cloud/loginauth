import express from "express";
import cors from "cors";
import test from "../controllers/authController.js";
//middleware
const router = express.Router();
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5176",
  })
);

router.get("/", test);

export default router;
