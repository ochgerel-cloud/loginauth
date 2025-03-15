import express from "express";
import cors from "cors";

//middleware
const router = express.Router();
router.use(cors({ credentials: true, origin: "http://localhost:5173" }));
