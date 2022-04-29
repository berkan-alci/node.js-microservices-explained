const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const events = [];

app.post('/events', (req, res) => {
    const event = req.body;
    console.log('Received event:', req.body.type);
    events.push(event);
    //send to post
    axios.post('http://posts-cluster-srv:4000/events', event).catch((err) => console.log(err.message));
    //send to comments
    axios.post('http://comments-cluster-srv:4001/events', event).catch((err) => console.log(err.message));
    // //send to query
    axios.post('http://query-cluster-srv:4002/events', event).catch((err) => console.log(err.message));
    // //send to moderation
    axios.post('http://moderation-cluster-srv:4003/events', event).catch((err) => console.log(err.message));
    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log(`Listening on port: 4005`);
});