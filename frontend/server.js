require("dotenv").config({ path: "../backend/.env" });
const express = require("express");
const path = require("path");
const app = require("../backend/src/app");

// Serve the built React files (same folder, since Root Directory is now frontend)
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all: send index.html for any route not handled by the API
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
