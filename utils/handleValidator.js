const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw(); // TODO aqui es donde crashea y saltan los errores
        return next(); // TODO continua hacia el controllador
    } catch (error) {
        res.status(403)
        res.send({ respuesta: "Error revise los campos", errors: error.array() })
    }
};

module.exports = validateResults