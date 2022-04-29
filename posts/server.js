const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

//in memory repository
const posts = {};

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/post', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id, title
    };
    await axios.post('http://event-bus-srv:4005/events', { type: 'PostCreated', data: { id, title } }).catch((err) => console.log(err.message));

    res.status(201).send(posts[id]);
});


app.post('/events', async (req, res) => {
    console.log('Received event:', req.body.type);

    res.send({});
});

app.listen(4000, () => {
    console.log(`Listening on port: 4000 test`);
});