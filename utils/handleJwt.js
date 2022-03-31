const jsonwebtoken = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Debes pasar el objeto del usuario
 * @param {*} user 
 */
const tokenSing = async(user) => {
    const sign = jsonwebtoken.sign({
            _id: user._id,
            role: user.role
        },
        JWT_SECRET, {
            expiresIn: "2h",
        },
    );
    return sign
};


/**
 * Debes pasar el token de sesion el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async(tokenJwt) => {
    try {
        return jsonwebtoken.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = { tokenSing, verifyToken }