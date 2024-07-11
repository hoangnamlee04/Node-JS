import Book from "../models/BookModel";

class BookController {
    async getAllBooks(req, res) {
        try {
            const books = await Book.find();
            res.status(200).json({
                message: "Get Done",
                data: books,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }

    async getBookDetail(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({
                    message: "Not Found",
                })
            }
            res.status(200).json({
                message: "Get Done",
                data: book,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }

    async createBook(req, res) {
        try {
            const book = await Book.create(req.body);
            res.status(200).json({
                message: "Create Done",
                data: book,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }

    async updateBook(req, res) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            if (!book) {
                return res.status(404).json({
                    message: "Not Found",
                })
            }
            res.status(200).json({
                message: "Update Done",
                data: book,
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }

    async deleteBook(req, res) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({
                    message: "Not Found",
                })
            }
            res.status(200).json({
                message: "delete Done",
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
}

export default BookController;