import express from "express";
const booksRouter = express.Router();
import BookController from "../controllers/books.js";

const bookController = new BookController();
/*
GET - /books
POST – /books
GET - /books /:id
PUT - / books /:id
DELETE - / books /:id
*/
booksRouter.get("/", bookController.getAllBooks)
booksRouter.get("/:id", bookController.getAllBookDetail);
booksRouter.post("/", bookController.createBook);
booksRouter.put("/:id", bookController.updateBooks);
booksRouter.delete("/:id", bookController.deleteBooks);
export default booksRouter;