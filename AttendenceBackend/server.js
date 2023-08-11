const express = require("express");
// const path = require('path');
const app = express();
const connectDb = require("./config/connectionDb")
const dotenv = require("dotenv").config();
const errorHandlers = require("./middleware/errorHandlers");

// app.use(express.static(path.join(__dirname, '../react-app/build')));
connectDb();
const PORT = process.env.PORT || 4001;


app.use(express.json());
app.use("/api",require("./routers/basicRouter"))
app.use(errorHandlers);


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})