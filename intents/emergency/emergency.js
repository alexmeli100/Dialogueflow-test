const {Card, Suggestion} = require('dialogflow-fulfillment');

function find_emergency(agent) {
    let response = [
        "I'm sorry to hear that…",
        "I'm here for you.",
        "Don't worry, we can get through this together!",
        "I'm here for you my friend.",
        "It must be difficult...I'm here to listen.",
        "Let me think about how I can help...",
        "Hmm...maybe I can help.",
        "That must tough, I'm here for you...",
        "I understand, it's not easy at times...",
        "I'm sure it must be a difficult time right now...maybe I can help"
    ];
    let option = Math.floor(Math.random() * 10);
    let service;

    if (!agent.parameters['callList']) {
        agent.add(`${response[option]} \nWould you like to talk to someone?`)
        agent.add(new Suggestion('Yes'));
        agent.add(new Suggestion('No'));
    }

    if (agent.parameters['callList'] === 'No') {
        service = "Here are few resources you can take a look at: \nHere is an <a href='http://depressionhurts.ca/en/default.aspx' target='_blank'>online resource</a> for you to manage, learn more and help yourself through depression. \nYou can visit <a href='https://www.camh.ca/en/your-care/access-camh' target='_blank'>CAMH</a> if you want to get diagnosed and/or see a doctor, you can call <a href='tel:416-535-8501'>416-535-8501</a>, option 2. \nIf you would like peer-support, there is a drop-in available at Toronto Drop-In: Depression and Anxiety Group, for more info, <a href='https://www.mooddisorders.ca/event/toronto-drop-in-depression-and-anxiety' target='_blank'>click here</a> \nLastly, my favourite apps are <a href='https://www.calm.com/' target='_blank'>Calm</a> and <a href='https://www.headspace.com/' target='_blank'>Headspace</a>, they both can help reduce stress, anxiety and help you clear your mind.\nI hope this was helpful!";
    } else if (agent.parameters['callList'] === 'Yes') {
        service = "Here is a couple numbers you can call to talk to someone: \n <b>Kids Help Phone:</b><br><a href='tel:1-800-668-6868'>1-800-668-6868</a> 24/7, free, confidential, anonymous, telephone counselling for youth. \n<b>Gerstein Centre:</b><br> <a href='tel:416-929-5200'>416-929-5200</a>, 24/7, free.\n<b>Toronto Distress Centres:</b><br> <a href='tel:416-408-4357'>416-408-4357</a> or 408-HELP, 24/7, free.";
    }

    if(agent.parameters['callList']) {
        agent.add(`${service}\nIs there anything else that I can help you with today?`)
        agent.add(new Suggestion('Free Meal'));
        agent.add(new Suggestion('Drop-in'));
        agent.add(new Suggestion('Clothing'));
        agent.add(new Suggestion('Shelter'));
        agent.add(new Suggestion('Emergency'));
    }
}

exports.emergency = find_emergency;