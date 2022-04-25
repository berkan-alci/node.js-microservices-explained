const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();

//in memory repository
const commentsByPostId = {};

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content, status: 'pending' });
    commentsByPostId[req.params.id] = comments;

    await axios.post('http://localhost:4005/events',
        {
            type: 'CommentCreated',
            data:
            {
                id: commentId,
                content,
                postId: req.params.id,
                status: 'pending',
            }
        }).catch((err) => console.log(err.message));

    res.status(201).send(comments);
});

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log('Received event:', req.body.type);

    if (type === 'CommentModerated') {
        const { postId, id, status, content } = data;
        const comments = commentsByPostId[postId];

        const comment = comments.find(c => {
            return c.id === id;
        });
        comment.status = status;

        await axios.post('http://localhost:4005/events', {
            type: 'CommentUpdated',
            data: {
                id,
                postId,
                content,
                status,
            }
        }).catch(err => console.log(err.message));
    }

    res.send({});
});

app.listen(4001, () => {
    console.log(`http://localhost:4001`);
});