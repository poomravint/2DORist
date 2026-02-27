import express from "express";
import { getUsers, addUser, delUser } from "../controllers/user.controller"

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:id", delUser);

export default router;