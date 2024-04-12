import { Router } from "express";
import authRouter from "./auth";
import booksRouter from "./books";
const router = Router();

router.use("/books", booksRouter);
router.use("/auth", authRouter);

export default router;