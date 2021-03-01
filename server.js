const puppeteer = require('puppeteer');
const express = require('express');
const userRoute = require('./routes/puppeteer.user')

const app = express();

app.use('/forms', userRoute);

let port = 8080;

app.listen(port, () => {
    console.log('Server is running on https://localhost:8080/');
});




    