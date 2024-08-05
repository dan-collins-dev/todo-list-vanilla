"use strict";

const express = require("express");
const path = require("path");
const app = express();
const port = 7643;

app.use("", express.static(path.join(__dirname, "./public")));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});