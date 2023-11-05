const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => {
    res.send("Hello from server side");
});

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});