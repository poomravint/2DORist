import { Request, Response } from "express";
import * as UserModel from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserModel.getAllUsers();
  res.json(users);
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email , password} = req.body;

  await UserModel.createUser(name, email, password);
  res.json({ message: "User created" });
};

export const delUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result: any = await UserModel.deleteUser(Number(id));

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({ message: "User deleted successfully" });
};
