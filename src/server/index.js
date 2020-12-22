projectData = {}
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const { request } = require('http');
const { log } = require('console');
const app = express()
dotenv.config();
const fetch = require('node-fetch');
app.use(express.static('dist'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

console.log(__dirname)



app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");

})

app.post('/result', function(req, res) {
    console.log('req.body.temp');
    projectData = req.body.temp;
    console.log(projectData + 'here');
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_Key}&of=json&txt=${req.body.temp}&model=general&lang=en`, { method: "Get" })
        .then(res => res.json())
        .then(json => res.json(json))

})