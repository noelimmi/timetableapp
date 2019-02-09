const express = require('express');
const mongoose = require('mongoose');
//Load routes
const auth = require("./routes/auth");
const register = require("./routes/register");

const app = express();

//DB Config and connection
const db = require('./config/dbkeys').MongoURI;
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

//BodyParser
app.use(express.json());

//Authenticate User
app.use("/api/auth", auth);

//Register User
app.use("/api/register", register);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));