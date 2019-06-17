const express = require('express');

const app = express();
app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another moddleware!');
    res.send('<h1>Add Product Page!');
});

app.use('/', (req, res, next) => {
    console.log('In another moddleware!');
    res.send('<h1>Hello from Express!');
});

app.listen(3000);