import pool from "../config/db";

export const createTodo = async (
  userId: number,
  title: string,
  description: string,
  startDate: string,
  endDate: string,
  priority: string
) => {
  const [result] = await pool.query(
    "INSERT INTO todos (user_id, title, description, start_date, end_date, priority) VALUES (?, ?, ?, ?, ?, ?)",
    [userId, title, description, startDate, endDate, priority]
  );
  return result;
};

export const getIncompleteTodos = async (userId: number) => {
  const [rows] = await pool.query(
    "SELECT * FROM todos WHERE user_id = ? AND is_completed = 0 ORDER BY end_date ASC",
    [userId]
  );
  return rows;
};