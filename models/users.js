const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    eMail: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    logdate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('users', usersSchema)