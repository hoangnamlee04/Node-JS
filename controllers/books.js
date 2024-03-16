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
    async getAllBookDetail(req, res) {
        const books = await Book.findById(req.params.id);
        res.status(200).json(books);
    }


    // POST /books
    createBook(req, res) {
        // Model.create({data})
        Book.create({
            title: "Book 2",
            description: "description 2",
            author: "author ",
            image: "image 2",
            price: 1,
            rate: 2,
        });

        res.send("Create Books");
    }

    // PUT /books/:id
    updateBooks(req, res) {
        res.send("UPdate book");
    }

    // DELETE /books/:id
    async deleteBooks(req, res) {
        await Book.findByIdAndDelete(req.params.id);
        res.json("Xoa xong roi");
    }

}
export default BookController;