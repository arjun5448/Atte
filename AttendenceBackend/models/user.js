const mongoose = require("mongoose");

const userRegisterSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Roll_No : {
        type : String,
        required : true,

    },
    Password : {
        type : String,
        required : true,
    },
    Role : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("kaurav",userRegisterSchema);