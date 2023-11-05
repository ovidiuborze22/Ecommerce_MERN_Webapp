// index.js
const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();

app.use("/", (req, res) => {
    res.send("Hello from server side");
});

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Failed to start the server: ${error}`);
    } else {
        console.log(`Server is running at PORT ${PORT}`);
    }
});