import { Request, Response, NextFunction } from "express";

const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("🔥 Error:", err);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

export default errorMiddleware;