// TODO los tres parameteros en los meddleware req, res, next

const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_Key
        if (apiKey === "Brhyant") {
            next()
        } else {
            res.status(403)
            res.send({ error: "APY_KEY_NO_ES_CORRECTA" })
        }

    } catch (error) {
        res.status(403)
        res.send({ error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER" })
    }
}

module.exports = customHeader