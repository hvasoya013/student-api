const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    ERNO:Number
})

module.exports = mongoose.model("Student",schema);