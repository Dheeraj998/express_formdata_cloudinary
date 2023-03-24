const express = require('express')
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const user = require('./routes/user')

const app = express()
const DB = 'here mongodb url';

try {
    mongoose.connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("connected to db");
} catch (error) {
    handleError(error);
}
require("dotenv")
    .config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json())
app.use("/user", user);






app.listen(3001, () => {
    console.log(`connected at port 3000 `)
})