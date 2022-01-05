const greetings = require("./commands/greetings")
const gif = require("./commands/gif")
const dadJokes = require("./commands/dadJokes");
const roast = require("./commands/roast");

const commands = { 
    "hey": greetings, 
    "gif": gif,
    "joke": dadJokes,
    "roast": roast
};

module.exports = async function (msg){
    let tokens = msg.content.split(" ")     // tokens = ['!gif', 'harry', 'potter']
    let command = tokens.shift()            // command = !gif
    if(command.charAt(0) === "!"){
        command = command.substring(1);     // command = gif
        try{
            commands[command](msg, tokens)
        }catch(e){}
    }
    
}