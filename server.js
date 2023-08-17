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

let message_id = 0
let users = []; //the json goes here
  
app.use(cors());

app.post('/send', async (req, res) => {
  try {
    res.status(200).send("Success!");
    const queryParams = req.query;
    const sender = queryParams.sender || 'Unknown';
    const receiver = queryParams.receiver || 'Unknown';
    const message = queryParams.message || 'none'
    users.push({ Id: message_id, Name: receiver, Unreaded: `${message} [${current_date} from ${sender}]`, Message: `${message} [${current_date} from ${sender}]`});
    message_id = message_id + 1
    console.log(users);
  } catch (err) {
    res.status(400).send(err.message);
    console.error(err.message);
  } 
});

app.get('/new/:id', async (req, res) => {
    try {
      const filteredData = JSON.parse(JSON.stringify(users.filter(item => item.Name === req.params.id)));
      const unreadedArray = filteredData.map(item => item.Unreaded);
      res.status(200).send(unreadedArray);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err.message);
    }
});

app.get('/msg/:id', async (req, res) => {
  try {
    const filteredData = JSON.parse(JSON.stringify(users.filter(item => item.Name === req.params.id)));
    const DataArray = filteredData.map(item => item.Message);
    for (const [key, value] of Object.entries(filteredData)){
      index_remove_readed = users.findIndex(obj => obj.Id==filteredData[key].Id);
      delete users[index_remove_readed].Unreaded;
      console.log(users);
    }
    res.status(200).send(DataArray);
  } catch (err) {
    res.status(400).send(err.message);
    console.error(err.message);
  }
});

app.delete('/delete/:id', async (req, res) => {
  try {
    var index = users.findIndex(obj => obj.Id==req.params.id);
    delete users[index-1];
    res.status(200).send("success!");
  } catch (err) {
    res.status(400).send(err.message);
    console.error(err.message);
  }
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})