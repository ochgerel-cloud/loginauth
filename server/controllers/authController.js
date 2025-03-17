import User from "../models/user.js";
import { hashPassword, comparedPassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const test = (req, res) => {
  res.json("test route");
  console.log("Hello im test");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Нэр, цахим хаяг, нууц үг хоосон эсвэл 6-с багагүй урттай байхгүй бол алдаа гаргах
    if (!name) {
      return res.json({ message: "Name is required", type: "error" });
    }

    if (!password || password.length < 6) {
      return res.json({
        message:
          "Password is required and should be at least 6 characters long",
        type: "error",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ message: "User already exists", type: "error" });
    }
    const hashedPassword = await hashPassword(password); // Нууц үгийг хашлах
    // Шинэ хэрэглэгч үүсгэх
    const user = await User.create({ name, email, password: hashedPassword });
    return res.json({ user, type: "success" });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  console.log("loginUser endpoint is working: ", req.body);

  try {
    const { email, password } = req.body;
    //Хэрэглэгчийг олох
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found", type: "error" });
    }
    // return res.json({ user, type: "success" });
    // console.log(user);

    //Нууц үгийг шалгах
    const match = await comparedPassword(password, user.password);
    if (!match) {
      return res.json({ message: "Password is incorrect", type: "error" }); // password is incorrect
    }
    console.log("JWT_SECRET: ", process.env.JWT_SECRET);

    jwt.sign(
      { email: user.email, id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        try {
          res
            .cookie("token", token)
            .json({ message: "Login success", type: "success" });
        } catch (cookieErr) {
          console.error("Cookie setting error: ", cookieErr); // Алдааг логлох
          return res
            .status(500)
            .json({ message: "Cookie setting error", type: "error" });
        }
      }
    );
    // return res.json({ message: "Login success", type: "success" }); // login success
  } catch (error) {}
};

export { test, registerUser, loginUser };
