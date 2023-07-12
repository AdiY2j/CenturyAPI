const express = require('express');
const cors = require('cors');
const csv = require('csvtojson');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("This Rest Api is working");
});

app.get('/matches', (req, res) => {
    csv().fromFile('demoapp_match.csv').then((jsonObj) => {
        res.status(200).send(jsonObj);
    });
});

app.listen(port, () => {
    console.log(`Listening to port no ${port}.....`)
});



