const { matchedData } = require("express-validator");
const { userModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { tokenSing } = require("../utils/handleJwt");
const { encrypt, compare } = require("../utils/handlePassword");

/**
 * Este controlador es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const RegisterCtrl = async(req, res) => {

    try {
        req = matchedData(req);
        const password = await encrypt(req.password)
        const body = {...req, password }
        const dataUser = await userModel.create(body)
        dataUser.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSing(dataUser),
            user: dataUser
        }
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR_REGISTER_USER")
    }

};

/**
 * Este controlador es el encargado de logear un usuario
 * @param {*} req 
 * @param {*} res 
 */
const LoginCtrl = async(req, res) => {
    try {
        req = matchedData(req);
        const user = await userModel.findOne({ email: req.email }).select('password name role email')
        if (!user) {
            handleHttpError(res, "USER_NOT_EXIST", 404);
            return
        }

        const hashPassword = user.get('password');
        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return
        }


        //TODO ocultamos el password
        user.set('password', undefined, { strict: false })
        const data = {
            token: await tokenSing(user),
            user
        }

        res.send({ data });
    } catch (error) {
        console.log(error);
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}

module.exports = { RegisterCtrl, LoginCtrl }