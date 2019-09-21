const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var UserSchema  = new Schema({
    username: {type: String, required: true, max: 50},
    email: {type: String, max: 50},
    password: {type: String, required: true},
    bmi: {type: Number},
    age: {type: Number, max: 130}
});

module.exports = mongoose.model('user', UserSchema);
