const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.post("/hello", (req, res) => {
    res.send("hello", req.data);
});

app.listen(3456, () => {
    console.log("Running on port 3456.");
});

// Export the Express API
module.exports = app;
