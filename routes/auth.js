const express = require('express');
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword')
const router = express.Router();
const { validatorRegister } = require('../validators/auth');

/**
 * Crear un registro
 */
router.post("/register", validatorRegister, async(req, res) => {
    req = matchedData(req);
    const password = await encrypt(req.password)
    const body = {...req, password }
    res.send({ data: body })
})


module.exports = router;