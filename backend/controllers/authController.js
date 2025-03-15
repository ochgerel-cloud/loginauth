import bcrypt from "bcrypt";
import db from "./db.js";

export const loginUser = async (req, res, next) => {
  console.log("loginUser STARTED ====>");
  const { username, password } = req.body;
  console.log("REQ BODY: ", req.body);

  const user = await db("user").where({ email: username }).first();
  console.log("USEEER: ", user);

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const match = await bcrypt.compare(password, hashedPassword);

  if (!match) {
    return res.status(401).json({ message: "User not found" });
  }

  req.session.userId = user.id;
  console.log(
    "req.session.userId: LOGIN SUCCESSFULL=======>",
    req.session.userId
  );

  return res.status(200).json({ message: "Login successful" });
};

// Логин хийсэн эсэхийг шалгах
export const checkLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return res.status(200).json({ message: "authorized" });
  next();
};
