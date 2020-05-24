const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
    const event = req.body;

    console.log("Event Received ", req.body.type);
    
    axios.post("http://localhost:4000/events", (req, res) => {
        event
    });
    axios.post("http://localhost:4001/events", (req, res) => {
        event
    });
    axios.post("http://localhost:4002/events", (req, res) => {
        event
    });

    res.send({ status: 'OK' });
});


app.listen(4005, () => {
  console.log("Listening on 4005");
});