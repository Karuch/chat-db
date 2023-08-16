const express = require('express')
const app = express()
const cors = require("cors");
const url = require('url');
const port = 5000

// current timestamp in milliseconds
let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
// prints date & time in YYYY-MM-DD format
let current_date = year + "-" + month + "-" + date;






const users = [
    { Name: "Tal", Message: ["A", "B"], Unreaded: ["C", "D"]},
    { Name: "Maor", Message: ["A", "B"], Unreaded: ["C", "D"]}

  ];
  
users.push({ Name: "Maor", Message: ["A", "B"], Unreaded: ["C", "D"]});

app.use(cors());

app.get('/send/:id', async (req, res) => {
  try {
    res.status(200).send(req.params.id);
    users.push({ Name: req.params.id, Message: ["A", "B"], Unreaded: ["C", "D"]});
  } catch (err) {
    res.status(400).send(err.message);
    console.error(err.message);
  }
  console.log(users);
});

app.get('/hello', async (req, res) => {
    try {
      res.status(200).send("hello world");
      const queryParams = req.query;
      const sender = queryParams.sender || 'Unknown';
      const receiver = queryParams.receiver || 'Unknown';
      const message = queryParams.message || 'none'
      console.log(sender, receiver, message, current_date);
    } catch (err) {
      res.status(400).send("error:", err.message);
      console.error(err.message);
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})