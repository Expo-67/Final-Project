// generateTokenAndSetCookie.js

import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // set to true if in production
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export default generateTokenAndSetCookie;
