const Discord = require('discord.js');
const { Collection } = require("discord.js")

const client = new Discord.Client({ intents: [32511] });

require('./conexion')

const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith("js"))

for(const file of commandFiles){
    const command = require(`./comandos/${file}`)
    client.commands.set(command.name, command)
}

client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith("js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${file}`)
    console.log(`Slash commands - ${file} cargado.`)
    client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate", async(interaction) => {
    if(interaction.isButton()){
        if(interaction.customId === 'tickets'){
            const everyone = interaction.guild.roles.cache.find(r => r.name === '@everyone')
            interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                type: "GUILD_TEXT",
                parent: "880947743944744961",
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    },
                    {
                        id: everyone.id,
                        deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
                    }
                ]
            }).then(c => {
                const mensaje = new Discord.MessageEmbed()
                .setTitle(`Bienvenido a tu ticket, ${interaction.user.username}!`)
                .setDescription("Esto es un ticket para resolver tus dudas o/y preguntas. Se paciente y espera a los administradores/staffs a que respondan tus dudas/preguntas.")
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(`${client.user.tag}'s ticket sistem`)
                

                c.send({ embeds: [mensaje] })
            })

            interaction.reply({ content: `<@${interaction.user.id}>, tu ticket ha sido creado correctamente!`, ephemeral: true})
        }
        if(interaction.customId === 'verificar'){
            /*
            const { Captcha } = require("captcha-canvas")

            const captcha = new Captcha()
            captcha.async = false
            captcha.addDecoy()
            captcha.drawTrace()
            captcha.drawCaptcha()

            const attachment = new Discord.MessageAttachment(captcha.png, "captcha.png")

            const embed = new Discord.MessageEmbed()
            .setDescription(`<@${interaction.user.id}>, Resuelve este Captcha para ser verificado. (Tienes 15 segundos.)`)
            .setColor("RED")
            .setTimestamp()
            */
            await interaction.member.roles.add("792378480977117206")
            interaction.reply({ content: `<a:allow:848830286313553941> ${interaction.user.username} Has sido verificado correctamente!`, ephemeral: true })
            /*
            const filter = m => m.author.id === interaction.user.id;

            const collector = interaction.channel.createMessageCollector({ filter, time: 15000 })

            collector.on("collect", async m => {
                setTimeout(() => {
                    m.delete()
                }, 1000)
                if(!m.content.startsWith(captcha.text)){
                    collector.stop()
                    m.channel.send(`<@${interaction.user.id}> El código de Captcha es incorrecto`).then(xd => {
                        setTimeout(() => {
                            xd.delete()
                        }, 3000)
                    })
                }
                
            })*/
        }
    }

    if(!interaction.isCommand()) return;

    const slashcmds = client.slashcommands.get(interaction.commandName)

    if(!slashcmds) return;

    try{
        await slashcmds.run(client, interaction)
    } catch(e) {
        console.error(e)
    }
})

client.on("messageCreate", async (message) => {
    
    let prefix = '.'

    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
        try {
            cmd.execute(client, message, args)
        } catch (e) {
            return;
        }
    }

    if(command === 'ping'){
        message.channel.send('Pong!')
    }

    if(command === 'normas'){
        const embednormas = new Discord.MessageEmbed()
        .setTitle('⛔️__**NORMAS DEL SERVER**__⛔️')
        .setColor('RED')
        .setDescription('**1**')
        message.channel.send(embednormas)
        
    }
})

client.on("ready", () => {

    const estados = [
        {
            name: `code CASARES #ad`,
            type: `WATCHING`
        },
        {
            name: `Follow on Twitch!`,
            type: `STREAMING`,
            URL: 'https://twitch.tv/casares'
        }
    ]

    const aleatorio = estados[Math.floor(Math.random() * estados.length)]

    setInterval(() => {
        function presence() {
            client.user.setPresence({
                activities: [aleatorio],
                status: 'dnd'
            })
        }
        presence()
    }, 7000)

    console.log(`Bot logged in as ${client.user.tag}`)
})

client.login('ODA5NDYyNzQ4MTY5NjMzODAy.YCVc7g.871Hmbm0zml6I-BtXJZdJ0Hzdmk')