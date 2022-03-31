const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //? el __dirname sirve para indicar en donde estoy
        const pathStorage = `${__dirname}/../storage`;
        //const pathStorage = "https://drive.google.com/drive/u/1/folders/1_Ztt3zcApFYFByUuwBCC0FMXDiIoP5YS"
        cb(null, pathStorage);
    },
    filename: function(req, file, cb) {
        //Todo mi-cv.pdf mi-foto.png mi-video.mp4
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware;