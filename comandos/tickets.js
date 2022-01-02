const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "tickets",
    alias: [],

execute (client, message, args){
  
    const embed = new Discord.MessageEmbed()
    .setTitle("Tickets")
    .setDescription(`Hola! Si tienes dudas o algún tipo de reporte puedes abrir este ticket para ser atendido por el **STAFF**\n\n**<a:ping:848648870866190388> NORMAS DE TICKETS**\n\n> <a:arrows:848652574709514250> Si creas un ticket y no respondes, serás warneado\n> <a:arrows:848652574709514250> Si creas un ticket sin necesidad, serás warneado\n> <a:arrows:848652574709514250> Si creas 1 ticket cuando tienes otro abierto, serás warneado\n\nCon 3 warns, **MUTE** durante **1 día**\nCon 5 warns **BAN**`)
    .setColor("ff7000")

    const row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageButton()
        .setCustomId("tickets")
        .setStyle("SUCCESS")
        .setLabel("Crear Ticket!")
        .setEmoji("📩")
    )
    message.channel.send({ embeds: [embed], components: [row] })
  
  }

}