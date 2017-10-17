const Joi = require('joi');

function validate(schema) {
    return function socialValidate(req, res, next) {
        Joi.validate(req.body, schema, (err) => {
            if (err !== null) {
                err.status = 400;
                next(err);
            } else {
                next();
            }
        });
    };
}

module.exports = validate;
