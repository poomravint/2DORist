import express from "express";
import { addTodoList, getIncompleteTodosController } from "../controllers/list.controller";
import authMiddleware from "../middleware/auth.middleware";


const router = express.Router();

router.get("/unsuccess", getIncompleteTodosController);
// router.get("/success", );
router.post("/", addTodoList);

export default router;