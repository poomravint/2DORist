import { Request, Response } from "express";
import * as ListModel from "../models/list.model"

export const addTodoList = async (req: Request, res: Response) => {
  try {
    //! const { title, description, startDate, endDate, priority } = req.body; 
    const { userId, title, description, startDate, endDate, priority } = req.body;

    
    // ดึง userId จาก Token (ต้องผ่าน authMiddleware ก่อน)
    //! const userId = (req as any).user.id; 

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    await ListModel.createTodo(
      userId,
      title,
      description,
      startDate,
      endDate,
      priority
    );

    res.status(201).json({ message: "Todo list created successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getIncompleteTodosController = async (req: Request, res: Response) => {
  try {
    // ดึง userId จาก Token
    //! const userId = (req as any).user.id; 
    const userId: number = 1;
    const todos = await ListModel.getIncompleteTodos(userId);
    res.json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};