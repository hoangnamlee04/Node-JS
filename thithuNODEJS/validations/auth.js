import Joi from "joi";

const registerValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
});

const loginValidator = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
});

export {
    registerValidator, loginValidator
}