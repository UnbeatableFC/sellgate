import jwt from "jsonwebtoken";

import { User } from "../models/User.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration Logic

    let user = await User.findOne({ email });

    if (user)
      return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });

    await user.save();

    //  Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    // Sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
      (err, token) => {
        if (err) throw new err();

        // Send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user)
      return res
        .status(401)
        .json({ message: "Invalid Creadentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid Credendials" });

    //  Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    // Sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
      (err, token) => {
        if (err) throw new err();

        // Send the user and token in response
        res.status(200).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};

export const getUserProfile = async (req , res) => {
  res.json(req.user)
}
