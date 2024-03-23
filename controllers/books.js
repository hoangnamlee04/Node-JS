import Book from '../models/bookmodel.js';
// function logic 
class BookController {
    // GET /books
    async getAllBooks(req, res) {
        try {
            const books = await Book.find({});
            res.status(200).json({
                message: "GET OK",
                data: books,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }

    }




    // GET /books/:id
    // async getAllBookDetail(req, res) {
    //     const books = await Book.findById(req.params.id);
    //     res.status(200).json(books);
    // }
    async getAllBookDetail(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({
                    message: " Book Not Found",
                });
            }
            res.status(200).json({
                message: "Get Book Detail Done",
                data: book,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }





    // POST /books
    // createBook(req, res) {
    //     // Model.create({data})
    //     Book.create({
    //         title: "Book 2",
    //         description: "description 2",
    //         author: "author ",
    //         image: "image 2",
    //         price: 1,
    //         rate: 2,
    //     });

    //     res.send("Create Books");
    // }

    async createBook(req, res) {
        console.log(req.body);
        try {
            const book = await Book.create(req.body);
            res.status(200).json({
                message: "Create Book Done",
                data: book,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }




    // PUT /books/:id
    // updateBooks(req, res) {
    //     res.send("UPdate book");
    // }
    async updateBooks(req, res) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            if (!book) {
                return res.status(404).json({
                    message: " Book Not Found",
                });
            }
            res.status(200).json({
                message: "Update Book Done",
                data: book,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }





    // DELETE /books/:id
    // async deleteBooks(req, res) {
    //     await Book.findByIdAndDelete(req.params.id);
    //     res.json("Xoa xong roi");
    // }
    async deleteBooks(req, res) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({
                    message: " Book Not Found",
                });
            }
            res.status(200).json({
                message: "Delete Book Done",
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}
export default BookController;