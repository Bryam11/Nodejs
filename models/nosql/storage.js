const mongoose = require('mongoose')

const StorageSchema = new mongoose.Schema({
    url: {
        type: String,
    },
    filename: {
        type: String,
    }
}, {
    timestamps: true, //TODO sive para controlar las fechas de cracion y actualizacion createdAT, updateAT
    versionKey: false,
})


//? asi creamos el documento en mongo
module.exports = mongoose.model('storages', StorageSchema)