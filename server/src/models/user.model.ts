import pool from "../config/db";

export const getAllUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  await pool.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password] // ✅ ต้องเป็น array
  );
};

export const deleteUser = async (id: number) => {
  const [result]: any = await pool.query(
    "DELETE FROM users WHERE id = ?",
    [id]
  );

  return result;
};

export const findUserById = async (id: number) => {
  const [rows]: any = await pool.query(
    "SELECT id, username, email FROM users WHERE id = ?",
    [id]
  );

  return rows[0];
};

export const findUserByEmail = async (email: string) => {
  const [rows]: any = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0]; // ถ้าไม่เจอจะเป็น undefined
};

export const findUserByUsername = async (username: string) => {
  const [rows]: any = await pool.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );

  return rows[0]; // ถ้าไม่เจอจะเป็น undefined
};