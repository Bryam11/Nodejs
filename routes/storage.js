const express = require('express');
const multer = require('multer');
const router = express.Router();

/**
 * 
 */

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename: function(req, file, cb) {
        //Todo mi-cv.pdf mi-foto.png mi-video.mp4


    }
})

/**
 * 
 */


router.post("/", (re, res) => {
    res.send({ respuesta: "Carga de archivos" })
})


module.exports = router