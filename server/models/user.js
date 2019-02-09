const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    regno: {
        type: String,
        required: true,
        minlength: 12,
        maxlength: 12
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    department: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', userSchema);

module.exports.User = User;