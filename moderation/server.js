const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log('Received event:', req.body.type);

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content,
            }
        })
    }

    res.send({});
});




app.listen(4004, () => {
    console.log(`Listening on port: 4004`);
});