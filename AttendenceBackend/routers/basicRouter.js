const express = require("express");
const router = express.Router();
const {getHome, makeLogin, createUser, postAttendance} = require("../controllers/basicControllers")

router.get("/home",getHome)

router.post("/login",makeLogin)

router.post("/register",createUser)

router.post("/attendence",postAttendance);
// -------------------------------------------------------------------------------

router.post("/getstudents",getStudents);


module.exports = router;