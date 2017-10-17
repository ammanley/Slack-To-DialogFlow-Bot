# Slack-To-DialogFlow-Bot

This simple bot is setup to act as a midpoint between a Slack "Bot" User, and a DialogFlow Agent. By simply setting the appropriate APIAI_KEY and SLACK_API_KEY in your development/deployment environment, you can get started chatting with your "Bot Users" powered by a DialogFlow agent (there are many sample Agents, or you can use your own). Currently, DialogFlow supports easy 1-click integration between Slack workspaces, so if you're just looking for that you might not have to go through any of this. Having a backend like this allows you to use other services with more complicated setups, and/or do interesting things with the messages and responses beyond what the NLP "AIs" return - that might include simple logging of all queries, or powering a food-delivery system that your users use a Bot to interact with! 

NOTE: This is NOT for a "Slack App" with the OAuth 2.0 dance - if you want to create a bot you can deploy to all of Slack, you'll need to make a number of modifications and better know what you're doing. 

## Requirements
```
-Node
-BotKit 
-Express 
-Request
-Apiai
-A NLP language AI service
-A Slack workspace you have administrator privileges with
```
## Getting Started

This bot may already be deployed for custom testing purposes. If it is, you'll have recieved secret credentials to let you log in and interface with it. If not, you can clone this code and replace the enviroment variables with your own credentials.
*****
0. Have admin privileges for a Slack channel and your development system.
1. npm install from package.json all dependencies.
2. Set your APIAI_KEY and SLACK_API_KEY environment variables to their corresponding values. You can get them from Slack's Bot Users interface for creating a Bot users in a Slack workspace you are the admin for, and in the settings area for the DialogFlow agent you wish to use.
3. node app.js to start the development server, which will run on port 5000 by default. Because this setup uses Botkit and apiai packages to abstract communication with the corresponding services, you shouldn't need to use something like ngrok or worry about exposing your ports to the internet.
*****


Once you've started up the server, you can go to the hosted port and if running, you will see a simple index.html to confirm the Bot is now running. Of course, if you knew how to get this far, you probably noticed it was running (or not) from the terminal output. But who knows!
