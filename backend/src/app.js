const express = require('express'); 
const app = express();
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("running bro!!");
});

app.use('/ai',aiRoutes);
module.exports = app ; 