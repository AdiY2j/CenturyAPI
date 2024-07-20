const express = require('express');
const cors = require('cors');
const csv = require('csvtojson');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("This Rest Api is working");
});

app.get('/matches', (req, res) => {
    const csvPath = path.join(__dirname, 'demoapp_match.csv');
    csv().fromFile(csvPath).then((jsonObj) => {
        res.status(200).send(jsonObj);
    });
});

app.listen(port, () => {
    console.log(`Listening to port no ${port}.....`)
});



