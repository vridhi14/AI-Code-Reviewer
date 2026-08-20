const express = require("express");
const cors = require("cors");

const app = express();

const aiRoutes = require("./routes/ai.routes");

app.use(express.json());

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000"
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        callback(new Error("Not allowed by CORS"));
    },
    credentials: true
}));

app.use("/ai", aiRoutes);

module.exports = app;
