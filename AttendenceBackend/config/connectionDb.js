const mongoose = require("mongoose");


const connectDb = async () => {
    try{
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Data Base  Connected Successfully");
    console.log(connect.connection.name);
    }
    catch (err){
        console.log("Data BAse Not Connected");
        process.exit(1);
    };

};

module.exports = connectDb;