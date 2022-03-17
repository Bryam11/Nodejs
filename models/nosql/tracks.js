const mongoose = require('mongoose')

const TracksSchema = new mongoose.Schema({
    name: {
        type: 'string',
    },
    album: {
        type: 'number',
    },
    cover: {
        type: 'string',
        validate: {
            validator: (req) => {
                return true;
            },
            message: "ERROR_URL",
        },
    },
    artist: {
        name: {
            type: 'string',
        },
        nickname: {
            type: 'string',
        },
        nationality: {
            type: 'string',
        },
    },
    duration: {
        start: {
            type: number,
        },
        end: {
            type: number,
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