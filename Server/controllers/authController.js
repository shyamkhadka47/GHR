import user from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class authController {
  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "All Fields Required" });
      }

      const findUser = await user.findOne({ email });
      if (!findUser) {
        return res
          .status(400)
          .json({ success: false, message: "User Doesn't Exist" });
      }
      const comparepassword = await bcryptjs.compare(
        password,
        findUser.password
      );
      if (!comparepassword) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Credential" });
      }
      const token = generateToken(findUser._id);

      const { password: _, ...rest } = findUser._doc;
      //   res.cookie("token", token, {
      //     httpOnly: true,
      //     secure: false,
      //     maxAge: 3600000,
      //   });
      res.status(200).json({
        success: true,
        message: "Login SuccessFul",
        user: rest,
        token,
      });
    } catch (error) {
      console.error("Error during user registration:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong while registering the user",
      });
    }
  };

  static userRegister = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "All Fields Are Required" });
      }

      const findUser = await user.findOne({ email });
      if (findUser) {
        return res
          .status(400)
          .json({ success: false, message: "User allready exist" });
      }
      const hashedPassword = await bcryptjs.hash(password, 10);
      const saveUser = await user.create({ email, password: hashedPassword });

      const { password: _, ...rest } = saveUser._doc;
      return res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user: rest,
      });
    } catch (error) {
      console.error("Error during user registration:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong while registering the user",
      });
    }
  };
  static isVerified= async(req, res)=>{
    res.status(200).json({success:true, message:"Verified"})
  }
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

export default authController;
