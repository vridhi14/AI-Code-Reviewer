import dotenv from "dotenv";
dotenv.config({ path: "../backend/.env" });

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from "../backend/src/app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the built React files
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all: send index.html for any route not handled by the API
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
