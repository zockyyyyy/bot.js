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
  client.user.setActivity("With Code (bot.js)", {type: "PLAYING"});
})

//verbindet sich mit den client aka bot
client.login("Njc1MzU5Njc3MzkxMDQ0NjEz.Xj2EMg.fjTCvl7UMDt-ilvn3oBRfOzhVoM");
