const {Card, Suggestion} = require('dialogflow-fulfillment');

function welcome(agent) {
    agent.add('Hello, my name is Chalmers, and I am what is known as a "chat-bot".\n I was designed by <a href="https://www.amplelabs.co/">Ample Labs</a> to help you find resources within the City of Toronto like the following:');
    agent.add(new Suggestion('Free Meal'));
    agent.add(new Suggestion('Drop-in'));
    agent.add(new Suggestion('Clothing'));
    agent.add(new Suggestion('Shelter'));
    agent.add(new Suggestion('Emergency'));
}

exports.greeting = welcome;