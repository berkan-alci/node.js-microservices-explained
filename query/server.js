const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = {};


app.get('/posts', async (req, res) => {
    res.send(posts);
});

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        const post = posts[postId];
        post?.comments.push({ id, content });


    }
    console.log(posts);
    res.status(201);
});

app.listen(4002, () => {
    console.log(`http://localhost:4002`);
});