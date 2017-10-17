const Joi = require('joi');
const validate = require('./validate');

const schema = Joi.object().keys({
    email: Joi.string().email().max(50).required(),
    password: Joi.string().regex(/^\S\w{5,32}$/).required(),
});

module.exports = validate(schema);
