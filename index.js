const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.post("/", (req, res) => {
    const data = req.body
    console.log(data);
    res.send(200, 'hello' + JSON.stringify(data));
});

app.listen(3456, () => {
    console.log("Running on port 3456.");
});

// Export the Express API
module.exports = app;
