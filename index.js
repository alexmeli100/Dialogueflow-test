// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {greeting} = require('./intents/greetings');
const {meal} = require('./intents/meal/find-meals');
const {emergency} = require('./intents/emergency/emergency');
const {shelter} = require('./intents/shelter/find-shelter');

process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  let intentMap = new Map();
  intentMap.set('Greetings', greeting);
  intentMap.set('Meal', meal);
  intentMap.set('Emergency', emergency);
  intentMap.set('Shelter', shelter);
  intentMap.set('Default Fallback Intent', fallback);
  agent.handleRequest(intentMap);
});
