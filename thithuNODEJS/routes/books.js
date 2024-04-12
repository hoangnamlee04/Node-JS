import { Router } from "express";
import BookController from "../controllers/books";

const booksRouter = Router();
const booksController = new BookController();

booksRouter.get("/", booksController.getAllBooks);
booksRouter.get("/:id", booksController.getBookDetail);
booksRouter.post("/", booksController.createBook);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

export default booksRouter;