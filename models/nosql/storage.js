const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

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

StorageSchema.plugin(mongooseDelete, { overrideMethods: "all" });

//? asi creamos el documento en mongo
module.exports = mongoose.model('storages', StorageSchema)