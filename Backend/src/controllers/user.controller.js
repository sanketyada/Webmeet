import { User } from "../models/user.models.js";
import httpStatus from "http-status";
import bcrypt, { hash } from "bcrypt";
import crypto from "crypto";

const login = async (req,res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "Username not Found!" });
    }

    const IsMatch = await bcrypt.compare(password, user.password);

    if (!IsMatch) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "Username or password is Incorrect" });
    }

    //If password get matched we creted a token using crypto package  and saved in user's documnet
    let token = crypto.randomBytes(20).toString("hex");
    user.token = token;
    await user.save();
    //also send token in json fromat
    return res.status(httpStatus.OK).json({ token: token });
  } catch (error) {
    return res.status(500).json({ message: `Something went Wrong ${error}` });
  }
};


const register = async (req,res) => {
  const { name, username, password } = req.body;
  try {
    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(httpStatus.FOUND).send({ message: "User already Exist!" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name,
      username: username,
      password: hashedPass,
    });

    await newUser.save();
    res
      .status(httpStatus.CREATED)
      .json({ message: "User Created Successfully!" });
  } catch (error) {
    res.json({ message: `Something went Wrong ${error}` });
  }
};

const Test = async (req, res) => {
  res.send("Hello");
};
export { register, Test,login };
