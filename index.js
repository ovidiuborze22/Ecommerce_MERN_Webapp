// index.js
const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");


dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (error) => {
    if (error) {
        console.error(`Failed to start the server: ${error}`);
    } else {
        console.log(`Server is running at PORT ${PORT}`);
    }
});