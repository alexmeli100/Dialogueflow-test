const moment = require("moment-timezone");
const Location = require("../lib/location");
const DataLoader = require("../lib/data-loader");
const MealFinder = require("../lib/meal-finder");
const parseTime = require("../lib/getTime");
const {Card, Suggestion} = require('dialogflow-fulfillment');


function fulfill(agent) {
    agent.add("May I use your location?");
    agent.add(new Suggestion('Yes'));
    agent.add(new Suggestion('No'));

}

exports.meal = fulfill;