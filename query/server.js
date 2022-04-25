const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = {};

const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        post?.comments.push({ id, content, status });


    }

    if (type == 'CommentUpdated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        const comment = post?.comments.find(c => {
            return c.id === id;
        })
        comment.status = status;
        comment.content = content;
    }
}


app.get('/posts', async (req, res) => {
    res.send(posts);
});

app.post('/events', async (req, res) => {
    console.log('Received event:', req.body.type);
    const { type, data } = req.body;
    handleEvent(type, data);
    res.status({});
});

app.listen(4002, async () => {
    console.log(`http://localhost:4002`);

    try {
        const res = await axios.get("http://localhost:4005/events");

        for (let event of res.data) {
            console.log("Processing event:", event.type);

            handleEvent(event.type, event.data);
        }
    } catch (error) {
        console.log(error.message);
    }
});