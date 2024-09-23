import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login functions

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check if user exists
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });
    // create jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: "User logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "error logging in user" });
  }
};

// register user

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // check if user already exists
    const user = await userModel.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    // validate inputs
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (!validator.isLength(password, { min: 9 })) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();
    // create jwt token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    res.json({ message: "User registered successfully", token });
  } catch (error) {
    res.status(500).json({ message: "error registering new user" });
  }
};

// check if user is logged in

export { login, register };
