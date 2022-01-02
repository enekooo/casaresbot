const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Envia un avatar")
    .addUserOption(option => 
        option
        .setName('usuario')
        .setDescription('Selecciona el usuario')
        .setRequired(false)
        ),

    async run(client, interaction){

        const user = interaction.options.getUser('usuario') && interaction.options.getUser('usuario').user || interaction.user;
        const member = interaction.options.getUser('usuario') && interaction.options.getUser('usuario').member || interaction.member;
        const usuario = interaction.options.getUser('usuario') || interaction.member;

        let embedavatar = new Discord.MessageEmbed()

        .setTitle(`Avatar de **${member.displayName}**`)
        .setImage(user.displayAvatarURL({ size: 1024, dynamic: true}))
        .setColor("AQUA")

        await interaction.reply({ embeds: [embedavatar], ephemeral: true})
    }
}