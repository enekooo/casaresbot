const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Banea a un usuario expecifico.")
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Selecciona un usuario que quieras banear")
        .setRequired(true)
        ),
    /*.addStringOption(option => 
        option
        .setName("Razón")
        .setDescription("Escribe un motivo por el cual vas a banear a esa persona.")
        .setRequired(false)
        ),*/

    async run(client, interaction){

        try{
            const user = interaction.options.getUser()
            const member = interaction.guild.members.cache.get(user.id)
            if(!member) return interaction.reply({ content: 'El usuario no existe en el servidor.', ephemeral: true })

            await interaction.reply({ content: `El comando BAN no esta listo todavía`, ephemeral: true})
        } catch(e) {
            console.error(e)
        }

    }
}