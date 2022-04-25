const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const events = [];

app.post('/events', async (req, res) => {
    const event = req.body;
    console.log('Received event:', req.body.type);
    events.push(event);
    //send to post
    await axios.post('http://localhost:4000/events', event).catch((err) => console.log(err.message));
    //send to comments
    await axios.post('http://localhost:4001/events', event).catch((err) => console.log(err.message));
    //send to query
    await axios.post('http://localhost:4002/events', event).catch((err) => console.log(err.message));
    //send to moderation
    await axios.post('http://localhost:4004/events', event).catch((err) => console.log(err.message));
    res.send({ status: 'OK' });
});

app.get('/events', async (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log(`http://localhost:4005`);
});