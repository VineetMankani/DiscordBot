const fetch = require('node-fetch');

module.exports = async function(msg, args){
    let name = '';
    if(args.length > 0){
        name = args.join(" ").toLowerCase();
    }
    const config = {headers: {Accept: 'text/json'}}
    let url = 'https://api.yomomma.info/'
    let response = await fetch(url, config);
    let json = await response.json();
    let joke = json.joke

    if(msg.content === "!roast"){
        msg.reply(joke)
        return
    }
    if(name === `${process.env.name1}` || name === `${process.env.name2}` || name === `${process.env.name3}`){
        msg.reply('Lmao.. No!');
        return
    }

    let newJoke = joke.split(" ");

    if(newJoke[3] === "fat"){
        let newJokea = newJoke.splice(4, 0, name)
    }
    else if(newJoke[4] === "fat"){
        let newJokea = newJoke.splice(5, 0, name)
    }
    else{
        msg.reply(joke)
        return
    }
    msg.reply(newJoke.join(" "))
}