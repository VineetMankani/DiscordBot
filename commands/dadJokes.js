const fetch = require('node-fetch');

module.exports = async function(msg){
    const config = {headers: {Accept: 'application/json'}}
    let url = 'https://icanhazdadjoke.com/'
    let response = await fetch(url, config);
    let json = await response.json();
    msg.reply(json.joke)
}