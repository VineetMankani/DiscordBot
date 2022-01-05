const fetch = require('node-fetch');

module.exports = async function(msg, args){
    let keyword = 'excited';
    if(args.length > 0){
        keyword = args.join(" ");
    }
    let url = `https://g.tenor.com/v1/search?q=${keyword}&key=${process.env.TENORKEY}`
    let response = await fetch(url);
    let json = await response.json();
    // console.log(json)
    let r = Math.floor(Math.random()*json.results.length);
    msg.reply(json.results[r].url)
}