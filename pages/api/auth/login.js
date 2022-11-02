/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/authModel";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, password } = req.body;
  await connectMongo();

  try {
    const user = await User.find({ userName: username, password });

    if (username === user[0].userName && password === user[0].password) {
      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
          username: username,
        },
        secret
      );

      const serialised = serialize("OursiteJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      res.setHeader("Set-Cookie", serialised);

      return res.status(200).json({
        message: true,
      });
    }
  } catch (error) {
    return res.status(500).json({ message: "user not found!", error });
  }
}
