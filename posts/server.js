const express = require('express');
const app = express();

//in memory repository
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {

});

app.listen(4000, () => {
    console.log(`http://localhost:4000`);
});