const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    lastname: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        minLength: 3,
        maxLength: 15
    },
    passsword: {
        type: String,
        required: true,
        minLength: 8
    }
});

const User = mongoose.model('User', userSchema);
module.exports = {
    User
}