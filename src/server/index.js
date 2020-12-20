projectData = {}
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const { request } = require('http');
const app = express()

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

app.get('/res', function(req, res) {
    res.json(projectData)
})
app.post('/result', function(req, res) {
    projectData = req.body.temp[0];
    console.log(projectData.form + 'Type:' + projectData.type);
})

// designates what port the app will listen to for incoming requests





// app.get('/test', function(req, res) {
//     res.send(mockAPIResponse)
// })