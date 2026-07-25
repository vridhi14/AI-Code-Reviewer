const express = require('express'); 
const app = express();
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin: "https://ai-code-reviewer-3gzf.onrender.com",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("running bro!!");
});

app.use('/ai',aiRoutes);
module.exports = app ; 
