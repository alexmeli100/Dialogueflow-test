const {Card, Suggestion} = require('dialogflow-fulfillment');

function find_shelter(agent) {
    agent.add(`To reserve an overnight shelter bed, contact Central Intake at <a href='tel:416-338-4766'>416-338-4766</a>, which is available 24/7.\nAnother option would be to go to the Streets to Homes Assessment and Referral Centre, which is located at 129 Peter Street, Toronto, ON M5V 1X1. Here, they will be able to assist you with finding a shelter to stay at for the night.\nIs there anything else that I can assist you with today?`);
    agent.add(new Suggestion('Free Meal'));
    agent.add(new Suggestion('Drop-in'));
    agent.add(new Suggestion('Clothing'));
    agent.add(new Suggestion('Shelter'));
    agent.add(new Suggestion('Emergency'));
}

exports.shelter = find_shelter;