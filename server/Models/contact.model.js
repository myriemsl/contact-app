const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    Fname: String,
    Lname: String,
    Job: String,
    Email: String,
    Mobile: Number,
}, {timestamps: true})

module.exports = mongoose.model('Contact', ContactSchema)




