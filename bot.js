const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  //liste der server wo rauf er conneted ist
  console.log("Servers:");
  client.guilds.forEach((guild) => {
    console.log(" - " + guild.name);
  })
})

//gamestatus von code
client.on('ready', () => {
  client.user.setActivity("With Code (Main.js)", {type: "PLAYING"});
})


//antwortet nicht auf seine nachrichten
client.on('message', (receivedMessage) => {
  if(receivedMessage.author == client.user) {
    return
  }
})

client.on('message',function(msg){
    
    var prefix = "+";

    
    if(!msg.content.startsWith(prefix)) return;

    const args = msg.content.slice(1).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    if(command === "hallo") {
        msg.channel.send("Leon ist ein sehr dummes kind! xD");
    }
    if(command === "uff") {
        msg.channel.send("Leon lern java weiter! xD");
    }
    if(command === "leonie") {
        msg.channel.send("leon java lernen sonst kommt klara xD");
    }
    if(command === "bot") {
        msg.channel.send(msg.author+",wie gehts?");
    }
    if(command === "ping") {
      msg.channel.send("Poonnnnnggggg");
    }
    
    
})


//verbindet sich mit den client aka bot
client.login("NjYxMjQxNTE2OTkxNDQ3MDgy.XjsLJg.F4DcPUTNwqsHCEfNsWbajAutyIw");