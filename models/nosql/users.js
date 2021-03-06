const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    },
    role: {
        type: ['user', 'admin'],
        default: 'user'
    },
}, {
    timestamps: true, //TODO sive para controlar las fechas de cracion y actualizacion createdAT, updateAT
    versionKey: false,
})


UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });

//? asi creamos el documento en mongo
module.exports = mongoose.model('users', UserSchema)