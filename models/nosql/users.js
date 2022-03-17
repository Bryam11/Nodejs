const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
    },
    age: {
        type: 'number',
    },
    email: {
        type: 'string',
        unique: true
    },
    password: {
        type: 'string',
    },
    role: {
        type: ['user', 'admin'],
        default: 'user'
    },
}, {
    timestamps: true, //TODO sive para controlar las fechas de cracion y actualizacion createdAT, updateAT
    versionKey: false,
})


//? asi creamos el documento en mongo
module.exports = mongoose.model('users', UserSchema)