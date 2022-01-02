const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Hecha a un usuario expecifico del servidor.")
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription('Selecciona el usuario que quieras expulsar.')
        .setRequired(true)
        ),
    /*.addStringOption(option => 
        option
        .setName("Razón")
        .setDescription('Motivo por el que vas a expulsar al usuario')
        .setRequired(false)
        ),*/

    async run(client, interaction){

        try{
            await interaction.reply({ content: `El comando KICK no esta listo todavía`, ephemeral: true})
        } catch(e) {
            console.error(e)
        }

    }
}