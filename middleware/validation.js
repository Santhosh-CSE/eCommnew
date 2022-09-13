const { userValidation } = require('../models/Validations/userValid');

module.exports = {
    addUserValidation: async (req, res, next) => {
        const value = userValidation.validate(req.body);
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    }
};