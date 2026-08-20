const express = require('express'); 
const app = express();
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors');
app.use(express.json());

const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        callback(new Error("Not allowed by CORS"));
    },
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("running bro!!");
});

app.use('/ai',aiRoutes);
module.exports = app ; 