const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");
const kaurav = require("../models/user");

const getHome = asyncHandler((req,res) => {
    res.send('HELLO HOME');
});

const makeLogin = asyncHandler(async (req,res) => {
    const {Roll_No,Password} = req.body;
    if(!Roll_No || !Password) {
        req.status(400);
        throw new Error("Invalid Details ENtered");
    }
    console.log(Password);
    const userAvailable = await kaurav.findOne({Roll_No});
    console.log(userAvailable.Password);
    if(userAvailable && (await bcrypt.compare(Password,userAvailable.Password))) {
        const accessToken = jwt.sign({
            user : {
                Name : userAvailable.Name,
                Roll_No : userAvailable.Roll_No,
                id : userAvailable.id,
            }
        },process.env.SECRET_KEY,{expiresIn : "1m"});
        if(userAvailable.Role == "Faculty") {
            //have to ADD the redirection
        res.status(200).json({accessToken});
    }
        else {
            //have to ADD the redirection
            res.status(200).json({accessToken});
        }
    }
    else {
        res.status(400);
        throw new Error("It maybe failed");
    }
});
const createUser = asyncHandler(async (req,res) => {
    //c
    console.log(req.body);
    const {Name,Roll_No,Password,Cpassword,Role} = req.body;
    //c
    // console.log(Name);
    // console.log(Roll_No);
    // console.log(Password);
    if(!Name || !Roll_No || !Password || !Cpassword || !Role)  {
        res.status(400);
        throw new Error("Enter All The Fields");
    }
    const userAvailable = await kaurav.findOne({Roll_No});
    //c
    // console.log(userAvailable);
    // console.log("__________");
    if(userAvailable) {
        // console.log(userAvailable);
        res.status(400);
        // console.log(userAvailable);
        throw new Error("User already registered");
       
    }
    const hashedPassword = await bcrypt.hash(Password,10);
    //c
    console.log(hashedPassword);
    const nUser = await kaurav.create({
        Name,
        Roll_No,
        Password:hashedPassword,
        Role
    });
    // //c
    // console.log(nUser);
    if(nUser) {
        // have to add the redirection
        res.status(201).json({nUser});
    }
    else {
        res.status(400);
        throw new Error({message:"User Data Is Not Valid"});
    }
})

const postAttendance = asyncHandler((req,res) => {

    res.send('HELLO ATTENDENCE');
});
//----------------------------------------------------------------------------------------------

const branchStudents = asyncHandler(async(req,res) => {
    const {Branch, Section, Year} = req.body;
    const user = await kaurav.find()

    
})




module.exports = {getHome,makeLogin,createUser,postAttendance};