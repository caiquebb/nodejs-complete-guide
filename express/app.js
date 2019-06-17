const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In another moddleware!');
    res.send('<h1>Hello from Express!');
});

app.listen(3000);