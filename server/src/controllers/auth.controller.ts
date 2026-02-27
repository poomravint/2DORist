import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as UserModel from "../models/user.model";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    console.log(username, email, password);
    const error: any = new Error("All fields are required");
    error.status = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await UserModel.createUser(username, email, hashedPassword);

  res.json({ message: "User registered successfully" });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user: any = await UserModel.findUserByUsername(username);

  if (!user) {
    const error: any = new Error("User not found");
    error.status = 404;
    throw error;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    const error: any = new Error("Invalid credentials");
    error.status = 401;
    throw error;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });

  res.json({ token });
};

export const getProfile = async (req: Request, res: Response) => {
  const userId = (req as any).user.id;

  const user = await UserModel.findUserById(userId);

  if (!user) {
    const error: any = new Error("User not found");
    error.status = 404;
    throw error;
  }

  res.json(user);
};
