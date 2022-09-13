const joi = require('@hapi/joi');

const validSchema = ({
    userValidation: joi.object({
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        mobno: joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required()
    })
});

module.exports = validSchema;