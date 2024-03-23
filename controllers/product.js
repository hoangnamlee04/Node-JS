import Product from '../models/ProductModel.js';
// function logic 
class ProductController {
    // GET /product
    async getAllProducts(req, res) {
        try {
            const products = await Product.find({});
            res.status(200).json({
                message: "GET OK",
                data: products,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }

    }




    // GET /books/:id
    async getProductDetail(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json({
                    message: " Product Not Found",
                });
            }
            res.status(200).json({
                message: "Get Product Detail Done",
                data: book,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }





    // POST /books
    async createProduct(req, res) {
        console.log(req.body);
        try {
            const product = await Product.create(req.body);
            res.status(200).json({
                message: "Create Product Done",
                data: product,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }




    // PUT /books/:id
    async updateProduct(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            if (!product) {
                return res.status(404).json({
                    message: " Product Not Found",
                });
            }
            res.status(200).json({
                message: "Update Product Done",
                data: product,
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }





    // DELETE /books/:id
    async deleleProduct(req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json({
                    message: " Product Not Found",
                });
            }
            res.status(200).json({
                message: "Delete Product Done",
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}
export default ProductController;