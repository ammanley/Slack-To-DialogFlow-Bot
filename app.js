const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
var request = require('request')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});


app.get('/', function (req, res) {
  res.sendFile('/index.html')
})

app.get('/search', function (req, res) {
  res.send(request('http://www.google.com', function (error, response, body) {
  }))

})

