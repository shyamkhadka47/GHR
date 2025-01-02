import jwt from "jsonwebtoken";
import user from "../models/usermodel.js";

const protect = async (req, res, next) => {
  // Check if the Authorization header is present
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(400).json({ success: false, message: "Not Authorized, Bearer token missing" });
  }

  // Extract token by removing the "Bearer " prefix
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using JWT secret key
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    // Find the user by the ID decoded from the token
    const findUser = await user.findOne({ _id: decode.id }).select("-password");
    if (!findUser) {
      return res.status(400).json({ success: false, message: "User Not Found" });
    }

    // Attach the user data to the request object
    req.user = findUser;
    // Optional for debugging
    next();
  } catch (error) {
    return res.status(403).json({ message: "Expired or Invalid Token" });
  }
};

export default protect;
