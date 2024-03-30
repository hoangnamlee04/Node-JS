import { Router } from "express";
import booksRouter from "./books.js";
import authRouter from "./auth.js";
const router = Router();
router.get("/", (req, res) => {
  res.send("Home");
});
router.use("/books", booksRouter);
router.use("/auth", authRouter);

export default router;