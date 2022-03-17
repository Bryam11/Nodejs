const express = require('express')
const router = express.Router();

//Todo http://localhost/tracks GET, POST, DELETE, PUT
//? siempre comillas dobles

router.get("/", (req, res) => {
    const data = ["hola", "mundo"]
    res.send({ data })
})




module.exports = router