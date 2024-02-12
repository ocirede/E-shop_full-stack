import Joi from "joi";


const validator = (schema) => (payload) => 
schema.validate(payload, {abortEarly: false});



const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).lowercase().trim().required(),
    email: Joi.string().email().lowercase().trim().required(),
    password: Joi.string().min(4).max(30).required(),
  });

  const loginSchema = Joi.object({
    username:Joi.string().min(3).max(30).lowercase().trim().required(),
    password: Joi.string().min(4).max(30).required(),
  });

  const registerValidator = validator(registerSchema);
  const loginValidator = validator(loginSchema);

  export { registerValidator, loginValidator };


