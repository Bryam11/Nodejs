const mongoose = require('mongoose')

const TracksSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    album: {
        type: String,
    },
    cover: {
        type: String,
        validate: {
            validator: (req) => {
                return true;
            },
            message: "ERROR_URL",
        },
    },
    artist: {
        name: {
            type: String,
        },
        nickname: {
            type: String,
        },
        nationality: {
            type: String,
        },
    },
    duration: {
        start: {
            type: Number,
        },
        end: {
            type: Number,
        },
    },
    mediaId: {
        type: mongoose.Types.ObjectId,
    }

}, {
    timestamps: true, //TODO sive para controlar las fechas de cracion y actualizacion createdAT, updateAT
    versionKey: false,
})


//? asi creamos el documento en mongo
module.exports = mongoose.model('tracks', TracksSchema)