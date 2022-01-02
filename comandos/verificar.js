const Discord = require('discord.js');

module.exports = {
  name: "verificar",
  alias: [],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setDescription(`<a:blue_siren:809369539565322300> · **VERIFICACION!**\n\nBienvenido al server Oficial de Casares! Antes de tener acceso al server, debes verificarte.\nTe recomiendo leer las <#793065438912839710> para evitar el ban. Si tienes algun tipo de duda/problema... puedes abrir un <#810888865916518420>.\n\n> Para verificarte pulsa el boton de abajo!\n\nGracias`)
  .setColor("BLUE")

  const row = new Discord.MessageActionRow()
  .addComponents(
    new Discord.MessageButton()
    .setStyle("PRIMARY")
    .setCustomId("verificar")
    .setLabel("Verificar")
    .setEmoji("<a:verified_blue:848830284233441300>")
  )

  message.channel.send({ embeds: [embed], components: [row] })

  
  }

}