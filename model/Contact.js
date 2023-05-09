const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required'],
    },
    email: {
        type: String,
        required: [true, 'The email field is required'],
    },
    phone: {
        type: String,
        required: [true, 'The phone field is required'],
    },
    message: {
        type: String,
        required: [true, 'The message field is required'],
    },
})

const Contact = mongoose.model('contacts', ContactSchema);
module.exports = Contact