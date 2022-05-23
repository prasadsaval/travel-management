const Joi = require("joi");
const authSchema = {
  user: Joi.object({
    name: Joi.string().max(100).required(),
    passanger_id: Joi.string().required(),

    passanger_email: Joi.string().email().lowercase().required(),
    passanger_Place: Joi.string().max(50).min(20).required(),
  }),
};

module.export = authSchema;
