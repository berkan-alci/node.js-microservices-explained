const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4000/events', event).catch((err) => console.log(err.message));
    await axios.post('http://localhost:4001/events', event).catch((err) => console.log(err.message));
    await axios.post('http://localhost:4002/events', event).catch((err) => console.log(err.message));
    res.status(200);
});



app.listen(4005, () => {
    console.log(`http://localhost:4005`);
});