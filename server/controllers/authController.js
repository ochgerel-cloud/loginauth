import User from "../models/user.js";

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
    // Шинэ хэрэглэгч үүсгэх
    const user = await User.create({ name, email, password });
    return res.json({ user, type: "success" });
  } catch (error) {
    console.log(error);
  }
};

export { test, registerUser };
