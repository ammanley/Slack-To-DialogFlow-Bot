'use strict'

const express = require('express');
const path = require('path');
const request = require('request');
const Botkit = require('botkit');
const apiai = require('apiai');
const ai = apiai(process.env.APIAI_KEY);
const app = express();

// --- App configurations
app.use(express.static('public'));

// --- Initialize/authenticate Slack communications
const controller = Botkit.slackbot({});
controller.spawn({
	token: process.env.SLACK_API_KEY
}).startRTM();

// --- Listen for direct messages or mentions to the bot
controller.on(['direct_message','direct_mention','mention'], function(bot,message) {
	console.log("heard: " + message.text)
	let request = ai.textRequest(message.text, {sessionId: "secret"});
	request.on('response', function(response) {
		let aiText = response.result.fulfillment.speech;
    	console.log(aiText);
    	bot.reply(message, aiText)
	});
	request.on('error', function(error) {
	    console.log(error);
	    bot.reply(message,'Looks like something went wrong!');
	});
	request.end()
});

// --- Basic confirmation that bot is running
app.get('/', function (req, res) {
  res.sendFile('/index.html')
});

// Settings for running the server, default to port 5000
const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

