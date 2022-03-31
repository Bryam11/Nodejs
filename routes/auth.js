const express = require('express');
const { RegisterCtrl, LoginCtrl } = require('../controllers/auth');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/auth');

/**
 * Crear un registro
 */
router.post("/register", validatorRegister, RegisterCtrl);
router.post("/login", validatorLogin, LoginCtrl)


module.exports = router;