const mongoose = require('mongoose')
const user_schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true

    }
})

module.exports = mongoose.model('user_document', user_schema)