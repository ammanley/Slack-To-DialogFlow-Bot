const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const request = require('request');
const Botkit = require('botkit');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const controller = Botkit.slackbot({});
controller.spawn({
	token: 'xoxb-258186438503-iJ23BjLgol3gGNXLhOZFJIbj'

}).startRTM();


controller.hears('hello',    ['direct_message','direct_mention','mention'],function(bot,message) {
	console.log("heard hello")
    bot.reply(message,'Hello yourself.');
});

controller.on(['direct_message','direct_mention','mention'], function(bot,message) {
	console.log("heard something")
    bot.reply(message,'Hi.');
});



app.get('/', function (req, res) {
  res.sendFile('/index.html')
});






const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

