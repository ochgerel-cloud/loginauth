import bcrypt from "bcrypt";
import db from "./db.js";

export const loginUser = async (req, res) => {
  console.log("loginUser STARTED ====>");
  const { email, password } = req.body;
  console.log("REQ BODY: ", req.body);

  const user = await db("user").where({ email }).first();
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "User not found" });
  }
  req.session.userId = user.id;
  console.log("req.session.userId: ", req.session.userId);
  return res
    .status(200)
    .json({ message: "Login successful", session: req.session.userId });
};

// Логин хийсэн эсэхийг шалгах
export const checkLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return res.status(200).json({ message: "authorized" });
  next();
};
