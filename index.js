// index.js
const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoute");


dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// calling routes
app.use("/api/user", authRouter);

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Failed to start the server: ${error}`);
    } else {
        console.log(`Server is running at PORT ${PORT}`);
    }
});