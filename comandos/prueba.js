const Discord = require('discord.js');
const client = new Discord.Client({ intents: [32511] });
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "prueba",
  alias: [],

  execute (client, message, args){
    
    try{
      message.channel.send('Esto es una prueba!')
    } catch(e) {
      console.error(e)
    }
  
  }

}