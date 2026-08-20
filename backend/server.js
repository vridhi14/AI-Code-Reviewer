require("dotenv").config();
const express = require("express");
const path = require("path");
const app = require("./src/app");

// Serve React build files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all: send index.html for any route not handled by your API
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});