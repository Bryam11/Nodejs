// * Asi haci hacemos uso a las variables de entorno
require("dotenv").config()

// * ASI SE IMPORTAR
// * requiere es que necesitamos
const dbConnect = require("./config/mongo")

// ?libreria que nos sirve para levantar un servicio web
const express = require('express')

//? libreria para el caso de los cors
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

//* Asi instanciamos las variables de entorno
const port = process.env.PORT || 3000

/**
 * Aqui incomamos las rutas
 */

app.use("/api", require("./routes"))


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

dbConnect()