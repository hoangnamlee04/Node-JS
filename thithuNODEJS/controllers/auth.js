import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
import { registerValidator, loginValidator } from "../validations/auth"

class AuthController {
    async register(req, res) {
        try {
            //validate 
            const { error } = registerValidator.validate(req.body, { abortEarly: false });
            if (!error) {
                const errors = error.details.map(err => err.message)
                return res.status(400).json({
                    message: errors,
                })
            }
            //check email 
            const { name, email, password } = req.body
            const checkEmail = User.findOne({ email })
            if (checkEmail) {
                return res.status(400).json({
                    message: "Email duoc dung roi"
                })
            }

            // password 
            const hashPassword = await bcryptjs.hash(password, 10)
            const user = await User.create({
                name,
                email,
                password: hashPassword,
            });
            res.status(200).json({
                message: "Create Done",
                data: { ...user.toObject(), password: undefined },
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }

    async login(req, res) {
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

}

export default AuthController;