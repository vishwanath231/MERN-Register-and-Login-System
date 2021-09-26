const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email)
};


const UserShema = new Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})





module.exports = mongoose.model('users', UserShema);