const express = require('express');
const app = express();

//in memory repository
const comments = {};

app.get('/comments', (req, res) => {

});

app.post('/comments', (req, res) => {

});

app.listen(4001, () => {
    console.log(`http://localhost:4001`);
});